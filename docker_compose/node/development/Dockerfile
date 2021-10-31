FROM node:latest

WORKDIR /usr/src/app

COPY ./frontend/package.json ./
COPY ./frontend/yarn.lock ./

RUN yarn install

COPY ./frontend .

CMD ["yarn", "dev"]