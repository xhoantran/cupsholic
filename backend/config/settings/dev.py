# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = "django-insecure-q4xq#p7x1fyg#(qfd2$z)(indidp1om4ge(*$ceh057n=y*iwq"

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = [
    "*",
    "localhost",
    "0.0.0.0",
    "127.0.0.1",
    "localhost:8000",
    "0.0.0.0:8000",
    "127.0.0.1:8000",
]

# Database
# https://docs.djangoproject.com/en/3.2/ref/settings/#databases

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql_psycopg2",
        "NAME": "postgres",
        "USER": "postgres",
        "PASSWORD": "postgres",
        "HOST": "postgres",
        "PORT": "5432",
    }
}

CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]
