FROM node:14.21.3

EXPOSE 3000

WORKDIR /backend

COPY package.json package-lock.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]