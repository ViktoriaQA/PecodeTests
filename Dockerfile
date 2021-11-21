
#Base image taken from:https://github.com/cypress-io/cypress-docker-images
FROM cypress/browsers:node14.17.0-chrome91-ff89
RUN mkdir /pecode-tests
WORKDIR /pecode-tests
COPY ./package.json .
COPY ./cypress.json .
COPY ./cypress ./cypress
RUN npm install
ENTRYPOINT ["npx","cypress","run"]
CMD [""]   
