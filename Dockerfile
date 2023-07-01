FROM node:lts-alpine3.18

COPY package.json package-lock.json ./

RUN npm install -g npm@9.7.2

RUN npm install --legacy-peer-deps

COPY . .

RUN NODE_OPTIONS=--openssl-legacy-provider npm run build

CMD ["npm", "start"]