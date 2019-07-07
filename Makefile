COMPOSE_PATH = ./docker/dev/docker-compose.yml 

run:
		docker-compose -f ${COMPOSE_PATH} exec server npm run start

test:
		docker-compose -f ${COMPOSE_PATH} exec server npm run test

