FROM node:12.18.3

WORKDIR /app

COPY /src/package.json .

RUN npm install --save-dev

EXPOSE 3000

CMD ["npm", "run", "dev"]
