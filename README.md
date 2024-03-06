# Fullstack app demo

Assuming that Docker is already installed on the host machine, the whole project can be started by running `docker compose up -d`.
It will create 4 containers and one network, and each contaner is accessible through dedicated port from the host machine as described in the table below:

| URL                    | Description                    |
| ---------------------- | ------------------------------ |
| http://localhost:3000/ | Web frontend (React)           |
| http://localhost:3001/ | API server (Express)           |
| http://localhost:3002/ | Postgres DB                    |
| http://localhost:3003/ | Postgres client (Adminer DBMS) |

# System requirements

```shell
docker -v
# Docker version 24.0.5, build ced0996

node -v
# v20.11.1

npm -v
# 10.5.0
```
