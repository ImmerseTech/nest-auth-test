FROM node:latest

WORKDIR /usr/src/back

COPY package*.json ./

RUN npm install

COPY . .


EXPOSE 4000
CMD ["npm", "start"]