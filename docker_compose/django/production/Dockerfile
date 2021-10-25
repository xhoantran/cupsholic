FROM python:3.9-slim-buster
ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

RUN mkdir /backend
RUN mkdir /backend/mediafiles
WORKDIR /backend

RUN apt-get update \
    && apt-get -y install libpq-dev gcc \
    && pip install psycopg2

# Install requirements
COPY ./backend/requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY ./docker_compose/entrypoint.sh /entrypoint.sh
RUN sed -i 's/\r$//g' /entrypoint.sh
RUN chmod +x /entrypoint.sh

COPY ./docker_compose/django/production/start.sh /start.sh
RUN sed -i 's/\r$//g' /start.sh
RUN chmod +x /start.sh

COPY .env.production /.env.production

# COPY ./docker_compose/django/start-celery /start-celery
# RUN sed -i 's/\r$//g' /start-celery
# RUN chmod +x /start-celery

# COPY ./docker_compose/django/start-celerybeat /start-celerybeat
# RUN sed -i 's/\r$//g' /start-celerybeat
# RUN chmod +x /start-celerybeat

# copy project from local machine to current WORKDIR
COPY ./backend .

ENTRYPOINT ["/entrypoint.sh"]