FROM node:18.15.0-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY next.config.js ./next.config.js

COPY app ./app
COPY components ./components
COPY const ./const
COPY models ./models
COPY public ./public
COPY redux ./redux
COPY services ./services
COPY styles ./styles

CMD [ "npm", "run", "dev" ]
