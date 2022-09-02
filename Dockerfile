FROM node:lts-alpine

# install simple http server for serving static content
RUN npm install -g http-server

# make the '/ladder/frontend' folder the current working directory
WORKDIR /ladder/frontend

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json /ladder/frontend/

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]