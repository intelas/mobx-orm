FROM node:21.7.3-alpine3.20
RUN apk add --no-cache git
WORKDIR /app
COPY package.json .
