<h1 align="center" style="font-weight:900;color:#ff926c;">
    Notice: YourDash is under development
    You can find the current changes on the "dev" branch
</h1>

# YourDash


## Links
  - Website: https://ydsh.ewsgit.uk or https://yourdash.ewsgit.uk
  - Discord: https://discord.gg/aY5CjDZTpG
  - GitHub: https://github.com/yourdash/yourdash

## About

- YourDash's goal is to be a more-performant nextcloud alternative which can achieve a good level of performance on a
  Raspberry Pi 4.
- Built using Node.js, Vite, Express, Electron, Bun and Typescript

## Projects

This repository 'yourdash' is a monorepo containing YourDash and it's related projects

Some of the YourDash projects include

- YourDash Backend (backend)
- YourDash Web (web)
- YourDash Desktop (desktop)
- UIKit (uikit)
- OpenGFX Engine (opengfx-engine)

## Host Your Own YourDash Instance

- [Docs](https://ydsh.ewsgit.uk/docs)

## Development Setup

### Requirements

- Personal IDE / Text Editor of Choice
    (Webstorm or VSCode is recommended)
    - [Webstorm](https://www.jetbrains.com/webstorm/)
    - [VSCode](https://code.visualstudio.com/)
- Linting And Formatting
  - [Prettier](https://prettier.io/)
  - [ESLint](https://eslint.org/)
- Package Manager
  - [Yarn](https://yarnpkg.com/) (Windows)
- Runtimes
  - [NodeJS](https://nodejs.org/)
  - [Bun](https://bun.sh/)
  - [Python 3.11.7](https://www.python.org/downloads/release/python-3117/)
  - [Emscripten](https://emscripten.org/docs/getting_started/downloads.html)
    - (Chocolately install method is prefered for windows)
- Version Control
  - [Git](https://git-scm.com/)

### Automated setup for deployment (Only supports Linux)
```shell
curl -L https://raw.githubusercontent.com/yourdash/yourdash/main/toolchain/setupInstance.sh | bash
```

### Installation and setup for development (Linux)

#### Install Node.js with Node Version Manager and Yarn
  - Install Node Version Manager
    - ```shell
      curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
      source ~/.nvm/nvm.sh
      ```
  - Install Node v21
    - ```shell
      nvm install 21
      source ~/.nvm/nvm.sh
      ```
  - Install Yarn
    - ```shell
      npm i -g yarn
      ```

#### Install dependencies
```shell
yarn install
```
#### Run YourDash backend in dev mode
```shell
yarn run yd:dev-backend
```
#### Run YourDash web in dev mode
```shell
yarn run yd:dev-web
```

### Installation and setup for development (Windows)

#### Install yarn
```shell
npm i -g yarn
```
#### Install npm dependencies
```shell
yarn install
```
#### Run YourDash backend in dev mode
```shell
yarn run yd:dev-backend
```
#### Run YourDash web in dev mode
```shell
yarn run yd:dev-web
```

#### Notes

- Ensure Python 3.11.x is the default for installing yarn packages as 3.11.x+ will cause node-gyp errors during `bun install`

# See more in the docs

https://ydsh.pages.dev/#/docs

# Credits

- Created by [Ewsgit](https://github.com/ewsgit)

## Top contributors

TODO: create a GH action to fetch top contributors and edit this list
%%__top_contributors_list__%%
