FROM node

RUN mkdir -p /src/app/
WORKDIR /src/app/

COPY . /src/app/

CMD ["node", "index.js"]