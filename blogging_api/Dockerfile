FROM python:3.8
ENV PYTHONUNBUFFERED 1
WORKDIR /app
COPY requirements.txt /app/
COPY entrypoint.sh /app/
COPY . /app/

RUN pip install -r requirements.txt

ENV NAME venv

CMD ["./entrypoint.sh"]