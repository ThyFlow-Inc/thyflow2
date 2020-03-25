FROM node:10

WORKDIR /usr/src/app

ENV PORT 8080

ENV HOST 0.0.0.0

COPY package*.json ./

RUN npm install --only=production

RUN npm rebuild node-sass

COPY . .

#  Fix  for Node Sass could not find a binding for your current environment: Linux 64-bit with Node.js 10.x

RUN npm run build

CMD npm start

