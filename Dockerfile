FROM node:18.15.0-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY next.config.js ./next.config.js

COPY . /app

CMD [ "npm", "run", "dev" ]
