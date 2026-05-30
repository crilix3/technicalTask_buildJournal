FROM node:25.9.0

WORKDIR /usr/src/apps

COPY . .

WORKDIR /usr/src/apps/build_journal_client
RUN npm install
RUN npm run build

# Проверяем наличие файлов
RUN test -d /usr/src/apps/build_journal_client/dist && echo "dist exists" || (echo "dist missing" && exit 1)

# Создаем целевую директорию и копируем
RUN mkdir -p /usr/src/apps/build_journal_api/public/
RUN cp -r /usr/src/apps/build_journal_client/dist/. /usr/src/apps/build_journal_api/public/

WORKDIR /usr/src/apps/build_journal_api
RUN npm install

EXPOSE 3020
CMD ["npm", "run", "start"]