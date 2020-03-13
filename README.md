

<img src="images/espresso.png" width="10%">

# Espresso Microservice Base
Plantilla Microservicio NodeJS con Express y conección a MongoDB con CRUD Básico y autenticación JWT.
## Como usar
```
$ npm install 
$ node server.js
```

## Variables
```
Crear .env
Basarse en archivo env_sample
```

## Docker
```
$ docker build -t expresso-app .
$ docker run -d -p 3000:3000 --name expresso-app
```