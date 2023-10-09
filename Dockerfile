FROM node:18.16.0-alpine

WORKDIR /app

COPY package*.json ./
COPY public ./public
COPY src ./src

COPY . .

RUN npm install


CMD ["npm", "run", "dev"]