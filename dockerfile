FROM node:10.7.0-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

EXPOSE 3000

CMD [ "npm", "start" ]