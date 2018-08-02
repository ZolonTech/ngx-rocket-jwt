FROM avatsaev/angular-chrome-headless

RUN mkdir /app

ADD . /app

WORKDIR /app

RUN npm install npm -g

RUN rm -rf node_modules/ && npm install

RUN npm run test:ci


