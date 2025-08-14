# YourDash Dash (uk.ewsgit.settings)

This is the template application for YourDash

## Directory Structure
- /[applicationId]
  - Readme.md
  - package.json
  - /hooks
    - [other applicationId]
      - (any files which may be used by other applications for extra functionality, these must be loaded by the application with this id or they will not be used. An example of usage
  for this is the uk-ewsgit-store which uses this functionality to display application banners and descriptions independantly from when the application is installed)
  - /assests
    - (the application's assets, e.g: icon.{png, jpeg, svg, avif})
  - /docs
    - (the application's documentation)
    - Readme.md
  - /web
    - (a vite library which exports one component)
    - package.json
    - Readme.md
  - /backend
    - (configure the application & run backend code if needed)
    - package.json
    - Readme.md
  - /shared
    - (typescript / other misc files which need to be shared between the backend and the frontend)
    - package.json
    - Readme.md
  - /standalone (optional)
    - (just a vite project which purely imports the component)
    - package.json
    - Readme.md

## Hooks
This application offers the following hook functionality
- Custom Application's settings pages through react components
- Integrating settings into the settings database and allow for configuration via the uk.ewsgit.settings application

## Authors
- Ewsgit