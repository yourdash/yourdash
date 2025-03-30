FROM ubuntu:latest
LABEL authors="ewsgit"
LABEL license="MIT"
LABEL product="YourDash Web"
USER ubuntu

SHELL ["/bin/bash", "-o", "pipefail", "-c"]

USER root
RUN apt-get -y update; apt-get -y install curl unzip

ENV NODE_VERSION="22.14.0"

# Create a script file sourced by both interactive and non-interactive bash shells
ENV BASH_ENV="/root/.bash_env"
RUN touch "${BASH_ENV}"
RUN echo '. "${BASH_ENV}"' >> ~/.bashrc

# Download and install nvm
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | PROFILE="${BASH_ENV}" bash

RUN nvm install $NODE_VERSION

WORKDIR /

RUN npm install --global pnpm

COPY . /web

WORKDIR /web/
RUN pnpm install

EXPOSE 5173:80
EXPOSE 5173:5173

RUN chmod +x /web/start.sh

CMD echo $CWD

ENTRYPOINT [". start.sh"]