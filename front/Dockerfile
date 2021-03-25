FROM node:14.15.1-alpine

COPY . /app
WORKDIR /app

RUN npm i

RUN npm run build

CMD ["npm", "run", "start"]
