FROM ubuntu


# install our dependencies and nodejs
RUN apt-get update && apt-get install -y \
  vim \
  nano \
  git \
  nodejs \
  npm

RUN npm install -g nodemon mocha supervisor

# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

# From here we load our application's code in, therefore the previous docker
# "layer" thats been cached will be used if possible
WORKDIR /opt/app
ADD . /opt/app

RUN  echo "exposed in 3000"
EXPOSE 3000
CMD ["nodemon"]