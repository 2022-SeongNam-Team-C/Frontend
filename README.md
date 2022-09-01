1. Image Build
    
    ```docker
    docker build -t {image_name}
    # docker build -t ladder-frontend-image
    ```
    
2. Create container
    
    ```docker
    docker run -it -p 8080:8080 --rm --name {container_name} {image_name}
    # docker run -it -p 8080:8080 --rm --name ladder-container ladder-frontend-image
    ```
    
3. localhost:8080으로 접속
