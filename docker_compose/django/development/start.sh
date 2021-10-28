#!/bin/sh

python manage.py migrate --settings=config.settings_local
python manage.py runserver --settings=config.settings_local