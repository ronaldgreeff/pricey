FROM node:12.18.3

RUN mkdir /app
WORKDIR /app

COPY package*.json ./
RUN npm install

CMD ["npm", "run", "dev"]
