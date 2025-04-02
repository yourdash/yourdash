FROM ubuntu:latest
LABEL authors="ewsgit"
LABEL license="MIT"
LABEL product="YourDash Backend"
USER root

RUN mkdir /fs/

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

# install bun.sh
RUN curl -fsSL https://bun.sh/install | bash

RUN npm install --global yarn

RUN mkdir /backend/

COPY ./instance/backend/ /backend/

WORKDIR /backend/
RUN yarn

WORKDIR /backend/
RUN mkdir apps
WORKDIR /backend/apps/
# copy each application's backend dir
COPY --parents ./apps/*/backend .
# copy each application's assets dir
# run yarn in each application's backend dir

EXPOSE 3563

RUN chmod +x /backend/start.sh

ENTRYPOINT ["/usr/bin/bash", "/backend/start.sh"]