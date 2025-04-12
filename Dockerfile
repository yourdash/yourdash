# ----- Base Image -----
FROM imbios/bun-node:latest-23.11.0-debian AS base-image
LABEL authors="ewsgit"
LABEL license="MIT"
LABEL product="YourDash Base Image"
USER root

RUN npm install --global yarn --force

# ----- End Of Base Image -----

# ----- Web -----
FROM base-image AS web-preparations
LABEL authors="ewsgit"
LABEL license="MIT"
LABEL product="YourDash Web"

WORKDIR /web

COPY ./instance/web/ /web/
COPY ./apps/ /web/src/app/apps/

RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn

EXPOSE 5173

FROM web-preparations AS web-release

ENTRYPOINT ["yarn", "dev"]
# ------ End of Web -----

# ----- Backend -----
FROM base-image AS backend-preparations
LABEL authors="ewsgit"
LABEL license="MIT"
LABEL product="YourDash Backend"

RUN mkdir /fs/

WORKDIR /

RUN mkdir /backend/
WORKDIR /backend/

COPY ./instance/backend/package.json /backend/package.json

RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn

WORKDIR /backend/
COPY ./instance/backend /backend/
RUN mkdir apps
WORKDIR /backend/src/apps/
# copy each application's backend dir
COPY ./apps/ .
# copy each application's assets dir
# run yarn in each application's backend dir

EXPOSE 3563

WORKDIR /backend

FROM backend-preparations AS backend-release
ENTRYPOINT ["yarn", "dev"]
# ----- End of backend -----
