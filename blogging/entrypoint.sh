#!/bin/bash

# Run Django migrations
python3 manage.py makemigrations
python3 manage.py migrate

# Start the Django application
python3 manage.py runserver 0.0.0.0:1314
