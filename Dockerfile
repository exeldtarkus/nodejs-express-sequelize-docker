FROM node:18

WORKDIR /app

COPY package.json .

RUN npm install
RUN npm install -g sequelize-cli
RUN npm run migrate

COPY . .

EXPOSE 3000

VOLUME [ "/app/node_modules" ]

CMD npm run start