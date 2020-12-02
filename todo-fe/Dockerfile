FROM node:12-alpine

WORKDIR /todo-fe
COPY . /todo-fe
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]