COMPOSE_PATH = ./docker/dev/docker-compose.yml 

install: 
		docker-compose -f ${COMPOSE_PATH} exec server npm install

run:
		docker-compose -f ${COMPOSE_PATH} up server

test:
		docker-compose -f ${COMPOSE_PATH} exec server npm run test

