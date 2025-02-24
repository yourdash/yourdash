# Setup YourDash Development Environment

This guide outlines how to set up your development environment for YourDash.

## 1. Install required dependencies

You will need the following dependencies:

- Git
- pnpm (recommended package manager)
- Node.js (with nvm or fnm recommended for version management)
- Emscripten (for Windows only, if needed)
- Text Editor / IDE of choice

---

### 1.1 Installing Git

<details>
<summary>Instructions</summary>

#### Windows

```powershell
# Use winget to install Git.
winget install --id Git.Git -e --source winget
```

#### Linux

<details>
<summary>Ubuntu / Debian</summary>

```bash
sudo apt update  # Update package list (recommended)
sudo apt install git
```

</details>

<details>
<summary>Arch Linux</summary>

```bash
sudo pacman -S git
```

</details>

</details>

---

### 1.2 Installing pnpm

<details>
<summary>Instructions</summary>

```bash
# Install pnpm globally using npm (Node Package Manager) - you'll need npm available, which is installed with Node.js
npm install -g pnpm
```

</details>

---

### 1.3 Installing Node.js (Recommended: nvm or fnm)

It's highly recommended to use a Node.js version manager like nvm (Node Version Manager) or fnm (Fast Node Manager) to easily switch between Node.js versions.

<details>
<summary>Using nvm (Linux/macOS)</summary>

```bash
# Install or update nvm (follow instructions on [https://github.com/nvm-sh/nvm#installing-and-updating](https://www.google.com/search?q=https://github.com/nvm-sh/nvm%23installing-and-updating))
curl -o- [https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh](https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh) | bash  # Or latest version
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# Install the latest LTS version of Node.js
nvm install --lts
nvm use --lts # Use the LTS version

```

</details>

<details>
<summary>Using fnm (Cross-platform)</summary>

```powershell
# Windows:
winget install Schniz.fnm

# Linux/macOS (using curl):
curl -fsSL [https://raw.githubusercontent.com/Schniz/fnm/master/install.sh](https://www.google.com/search?q=https://raw.githubusercontent.com/Schniz/fnm/master/install.sh) | bash

# Install and use the latest LTS version of Node.js
fnm use --install-if-missing --lts
```

</details>

---

### 1.4 Installing Emscripten (Windows only, if needed)

> This step is only required if you are on Windows.

<a href="https://emscripten.org/docs/getting_started/downloads.html">Download And Install Emscripten</a>  Follow the instructions on the Emscripten website.

---

### 1.5 Installing An IDE / Text Editor

*   **WebStorm (recommended):** [Download Webstorm](https://www.jetbrains.com/webstorm/download/)
*   **Visual Studio Code:** [Download Visual Studio Code](https://code.visualstudio.com/Download)
*   **Other IDEs/Editors:**  Choose your preferred development environment.

## 2. Clone YourDash From GitHub

```bash
git clone git@github.com:yourdash/yourdash.git  # Clone the main branch
# OR
git clone -b dev git@github.com:yourdash/yourdash.git # Clone the dev branch
```

## 3. Install YourDash's dependencies with pnpm

```bash
cd yourdash  # Go to the YourDash project directory
pnpm install
```

## 4. Start YourDash

```bash
# Example: Start the backend in development mode
pnpm run backend

# Example: Start the web client in development mode
pnpm run web
```