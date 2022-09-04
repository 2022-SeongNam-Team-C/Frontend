# frontend

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Docker 실행방법
Image Build

docker build -t {image_name} {route}  
ex) docker build -t ladder-frontend-image .  

Create container

docker run -it -p 8080:8080 --rm --name {container_name} {image_name}  
ex) docker run -it -p 8080:8080 --rm --name ladder-container ladder-frontend-image
localhost:8080으로 접속
