#!/bin/bash
dropdb mdisubd
createdb mdisubd
psql -U iceandrise -c "ALTER USER iceandrise PASSWORD '123456'" mdisubd
export SQLCOMMAND=$(cat database.sql)
psql -d mdisubd -c  "$SQLCOMMAND"