FROM node:20-alpine

RUN addgroup app && adduser -S -G app app

USER app

WORKDIR /app

COPY package*.json .

USER root

RUN chowwn -R app:app

RUN npm install

COPY . . 

EXPOSE 5172

CMD npm run dev

