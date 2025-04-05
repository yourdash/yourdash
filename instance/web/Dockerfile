FROM ubuntu:latest
LABEL authors="ewsgit"
LABEL license="MIT"
LABEL product="YourDash Web"
USER root

SHELL ["/bin/bash", "-c"]

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

RUN npm install --global yarn

RUN mkdir /backend/
COPY ./instance/backend/ /backend/

WORKDIR /backend/
RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn

WORKDIR /

RUN mkdir /web/
RUN npm install --global yarn

COPY ./instance/web/ /web/

WORKDIR /web/
RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn

COPY ./apps/ /web/src/app/apps/

EXPOSE 5173:80

RUN chmod +x /web/start.sh

CMD echo $CWD

ENTRYPOINT ["/usr/bin/bash", "/web/start.sh"]