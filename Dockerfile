FROM --platform=linux/amd64 node:22-slim

WORKDIR /usr/src/app

ADD . .

RUN npm install -g npm@12.0.1

RUN npm ci

RUN npm run build

CMD ["node", "dist/main.js"]
