FROM python:3.9-slim-buster

COPY requirements.txt /tmp/requirements.txt
RUN python -m pip install -r /tmp/requirements.txt

ADD . /app

WORKDIR /app
