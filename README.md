# technicalTask_buildJournal

docker build -t myapp .
docker compose up
docker exec -it technicaltask_buildjournal-postgres-1 bash
psql -U postgres -d build_journal < /home/backup.sql
exit
