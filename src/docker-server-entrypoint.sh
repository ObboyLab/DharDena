#!/bin/bash
echo "Starting the server entrypoint script"

cd usr/src/dhardena

MYSQL_UP=1000
echo "waiting for myssql for startup"

while [ $MYSQL_UP != 0]; do
    sleep 1
    echo "testing is mysql is up"

    if [ -z "$DB_PASSWORD"]
    then
        mysql -h $DB_HOST -u $DB_USERNAME -e "SELECT CURDATE();" $DB_NAME
    else
        mysql -h $DB_HOST -u $DB_USERNAME --password=$DB_PASSWORD -e "SELECT CURDATE();" $DB_NAME
    fi
    MYSQL_UP=$?
  echo "exit code $MYSQL_UP"
done

echo "mysql started"

node_modules/.bin/sequelize db:migrate