.PHONY: up down update

up:
    docker-compose up -d --build

down:
    docker-compose down

update: down up