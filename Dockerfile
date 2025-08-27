FROM oven/bun:latest AS base
LABEL authors="ewsgit"
WORKDIR /app/src

FROM base AS yourdash-backend-installed-deps

RUN mkdir -p /temp/dev
COPY packages/backend/package.json /temp/dev/
RUN cd /temp/dev && bun install

FROM base AS yourdash-backend

COPY --from=yourdash-backend-installed-deps /temp/dev/node_modules node_modules
COPY packages/backend .

ENTRYPOINT ["bun", "run", "dev"]

FROM base AS yourdash-web-frontend-installed-deps

RUN mkdir -p /temp/dev
COPY packages/web-frontend/package.json /temp/dev/
RUN cd /temp/dev && bun install

FROM base AS yourdash-web-frontend

COPY --from=yourdash-web-frontend-installed-deps /temp/dev/node_modules node_modules
COPY packages/web-frontend .

ENTRYPOINT ["bun", "run", "dev"]
