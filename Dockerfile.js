FROM node:lts-alpine

RUN npm install -g json-server

WORKDIR /data

EXPOSE 3000

#RUN npm --version
CMD json-server --watch db.json --host 0.0.0.0
