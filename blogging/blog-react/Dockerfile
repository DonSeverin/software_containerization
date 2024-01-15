# Stage 1: Build React app
FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -D tailwindcss

COPY . .

EXPOSE 8000

CMD [ "npm", "run", "start" ]

