FROM node:25.9.0

WORKDIR /usr/src/apps

COPY . .

WORKDIR /usr/src/apps/build_journal_client
RUN npm install
RUN npm run build

RUN cp -r /usr/src/apps/build_journal_client/dist/* /usr/src/apps/build_journal_api/public/

WORKDIR /usr/src/apps/build_journal_api
RUN npm install

EXPOSE 3020
CMD ["npm", "run", "start"]