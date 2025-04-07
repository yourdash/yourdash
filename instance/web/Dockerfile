FROM node:23.11.0 AS installer
LABEL authors="ewsgit"
LABEL license="MIT"
LABEL product="YourDash Web"
USER root

RUN npm install --global yarn

WORKDIR /

RUN mkdir /web/

COPY ./instance/web/package.json /web/package.json

RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn

FROM oven/bun:debian AS release

COPY ./instance/web/ /web/

WORKDIR /web/

COPY ./apps/ /web/src/app/apps/

EXPOSE 5173:80

RUN chmod +x /web/start.sh
RUN bun add --global yarn

ENTRYPOINT ["/bin/sh", "/web/start.sh"]
