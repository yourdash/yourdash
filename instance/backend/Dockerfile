FROM node:23.11.0 AS installer
LABEL authors="ewsgit"
LABEL license="MIT"
LABEL product="YourDash Backend"
USER root

RUN mkdir /fs/

WORKDIR /

RUN npm install --global yarn

RUN mkdir /backend/
WORKDIR /backend/

COPY ./instance/backend/package.json /backend/package.json

RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn

FROM oven/bun:debian AS release

WORKDIR /backend/
COPY ./instance/backend /backend/
RUN mkdir apps
WORKDIR /backend/apps/
# copy each application's backend dir
COPY ./apps/*/backend .
# copy each application's assets dir
# run yarn in each application's backend dir

EXPOSE 3563

WORKDIR /backend

RUN chmod +x /backend/start.sh
RUN bun add --global yarn

ENTRYPOINT ["/bin/sh", "/backend/start.sh"]
