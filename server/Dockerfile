FROM node:alpine
WORKDIR /usr/node/app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install -g nodemon
COPY . /usr/node/app
EXPOSE 5000
CMD ["npm", "run", "dev"]