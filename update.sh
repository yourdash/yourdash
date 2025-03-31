#!/bin/bash
# Description: This script finds subdirectories containing package.json and runs 'yarn' in them.
# It only goes one level deep.

# Get the current directory.
current_dir=$(pwd)

# Find all directories in the current directory.
find . -maxdepth 1 -type d -print0 | while IFS= read -r -d $'\0' dir; do
  # Use a safer way to extract the directory name and avoid issues with spaces.
  if [ "$dir" != "." ]; then
    # Check if a package.json file exists in the subdirectory.
    if [ -f "$dir/package.json" ]; then
      # Change the current directory to the subdirectory.
      cd "$dir"

      # Display a message indicating where 'yarn' is being run.
      echo -e "\e[32mRunning yarn in $dir...\e[0m"

      # Run 'yarn'.  Include error handling.
      if ! yarn; then
        echo -e "\e[31mFailed to run yarn in $dir\e[0m"
      fi

      # Change the current directory back to the original directory.
      cd "$current_dir"
    fi
  fi
done

echo -e "\e[33mScript completed.\e[0m"
