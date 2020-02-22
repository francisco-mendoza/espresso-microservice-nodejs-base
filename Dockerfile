FROM node:8.9.3

RUN mkdir -p /usr/src
WORKDIR /usr/src

COPY package.json /usr/src
RUN npm install

COPY . /usr/src

EXPOSE 3000

CMD [ "node", "server.js" ]