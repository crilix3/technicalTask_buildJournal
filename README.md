# Build Journal

## Технологический стек

### Backend (build_journal_api)

| Технология     | Зачем выбрал                          |
| -------------- | ------------------------------------- |
| **Node.js**    | скорость Node.js + большое сообщество |
| **Express.js** | Легковесный, огромное сообщество      |
| **PostgreSQL** | Надёжность                            |

### Frontend (build_journal_client)

| Технология                | Зачем выбрал                                                                 |
| ------------------------- | ---------------------------------------------------------------------------- |
| **React.js + TypeScript** | Компонентный подход, Hooks, Статическая типизация                            |
| **Axios**                 | Достаточно прост и удобен для отправки и обработки данных и ошибок с сервера |
| **MobX**                  | Простой стейт-менеджер, не требует жесткого контроля за изменениями          |
| **React-Icons**           | Очень большая библиотека svg иконок                                          |
| **Vite**                  | Мгновенная сборка и HMR                                                      |

### DevOps

| Технология         | Зачем выбрали                     |
| ------------------ | --------------------------------- |
| **Docker Compose** | Унификация окружения, один запуск |
| **GitHub**         | CI/CD прямо в репозитории         |

### Требования

- Docker
- Git

# 1. Клонируем репозиторий

git clone https://github.com/crilix3/technicalTask_buildJournal.git
cd technicalTask_buildJournal

# 2. Запускаем!

- docker build -t myapp .
- docker compose up
- docker exec -it technicaltask_buildjournal-postgres-1 bash
- psql -U postgres -d build_journal < /home/backup.sql

### После запуска

- Переходим по адрессу http://localhost:3020
