
FROM node:8.9.3-alpine


WORKDIR /usr/src/dhardena
# install our dependencies and nodejs
RUN apk update
RUN apk add bash python mysql-client g++ make
RUN npm install -g nodemon mocha supervisor

COPY ./package*.json /usr/src/dhardena/

RUN npm install
ADD ./.sequelizerc /usr/src/dhardena/.sequelizerc

ADD ./src /usr/src/dhardena
ADD ./docker-server-entrypoint.sh /usr/src/dhardena/docker-server-entrypoint.sh

RUN  echo "exposed in 3000"
EXPOSE 3000

RUN cp docker-server-entrypoint.sh /usr/local/bin/ && \
  chmod +x /usr/local/bin/docker-server-entrypoint.sh
ENTRYPOINT [ "/usr/local/bin/docker-server-entrypoint.sh" ]
