from os import environ

DATABASE_URL = environ.get("DATABASE_URL")
GOOGLE_CLIENT_ID = environ.get("GOOGLE_CLIENT_ID")
GOOGLE_CLIENT_SECRET = environ.get("GOOGLE_CLIENT_SECRET")
SESSION_SECRET = environ.get("SESSION_SECRET")
