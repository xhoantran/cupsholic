FROM node:latest

COPY ./frontend /frontend
WORKDIR /frontend
# COPY ./frontend/package.json ./
# COPY ./frontend/yarn.lock ./
RUN yarn install
RUN yarn

CMD ["yarn", "build"]