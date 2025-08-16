FROM alpine:latest as yourdash-backend
LABEL authors="ewsgit"

COPY ./packages/backend /

ENTRYPOINT ["bun", "run", "dev"]

FROM alpine:latest as yourdash-web-frontend
LABEL authors="ewsgit"

COPY ./packages/web-frontend /

ENTRYPOINT ["bun", "run", "dev"]
