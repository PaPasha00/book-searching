FROM node:19-alpine3.16 
WORKDIR /app
COPY package.json .
RUN yarn install
ENV WDS_SOCKET_PORT=3001
COPY . .
EXPOSE 3000
CMD ["npm", "start"]