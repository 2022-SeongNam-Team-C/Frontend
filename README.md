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

## Docker 실행방법

- Image Build
    - docker build -t {image_name} {route}  
    ex) docker build -t ladder-frontend-image .
- Create container
    - docker run -it -p 8080:8080 --rm --name {container_name} {image_name}  
    ex) docker run -it -p 8080:8080 --rm --name ladder-container ladder-frontend-image
- docker-compose up 으로 실행하기
    - 우선 Docker 레포를 클론해주세요
    - 서브 모듈을 지우시고, 각자 작업하시는 브랜치를 도커 레포안에 넣어주세요.
    - Docker 레포 터미널에서 docker-compose -f docker-compose.yml up -d —build 실행
    - 향후 nginx 추가 예정
- localhost:8080으로 접속
