FROM node
WORKDIR /usr/src/app
RUN npm init -y
RUN npm install koa koa-router
COPY ./server.js ./server.js
EXPOSE 8080
CMD ["node", "server.js"]