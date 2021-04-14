FROM node:15.14.0-alpine3.10

RUN mkdir ./home/application/

COPY server.js /home/application/

WORKDIR ./home/application/

EXPOSE 8081

CMD [ "node", "server.js" ]