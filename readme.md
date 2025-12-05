## Docker Devops

### Step 1 : pull an ubuntu image from docker hub and create a container
```bash
docker pull ubuntu
docker run -it ubuntu
```
### Step 2 : Make your own image...create a dockerfile to create a nodejs image
```Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY . .
CMD node hello.js
```
### Step 3 : build the image
```bash 
docker build -t mynodeapp .
```

### Step 4 : run the container
```bash
docker run mynodeapp
```
