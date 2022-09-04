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
    - (메인 브랜치 수정사항이 있는 경우) 서브모듈 업데이트하기
        1. git submodules 추가하기
            
            ```
            git submodule add {submodule_url}
            ```
            
            - 해당 명령어를 사용하면 .gitmodules에 경로가 추가됨
            - 만약 서브모듈을 수정한 뒤 메인 깃에서 status 하면 오류가 남
        2. submodule 업데이트
            1. 서브모듈을 포함하는 메인 깃을 처음 클론하면, 기본적으로 폴더가 비어있는 상태로 남아있음
            2. 다음과 같은 명령어를 더 실행시켜주어야 한다.
                
                ```
                git submodule init
                git submodule update
                ```
                
                - 해당 상태로 실행하면 서브모듈에서 파일들을 받아옴
            3. 해당 서브모듈 레포에서 변경사항이 발생한경우, 다음과 같은 명령어를 입력하여 업데이트 해야함
                
                ```
                git submodule update --recursive --remote
                ```
                
                - 갱신된 파일들을 받아오게 됨
    - docker-compose -f docker-compose.yml up -d —build
    - 향후 nginx 추가 예정
- localhost:8080으로 접속
