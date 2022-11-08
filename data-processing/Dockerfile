FROM openwhisk/python3action:latest

RUN apk add build-base

RUN apk update \
    && apk add --virtual build-deps gcc python3-dev musl-dev \
    && apk add postgresql \
    && apk add postgresql-dev \
    && pip install psycopg2 \
    && apk add jpeg-dev zlib-dev libjpeg \
    && pip install Pillow \
    && apk del build-deps

RUN apk add --update py-pip
RUN pip install numpy
RUN pip install matplotlib
RUN pip install pandas

COPY Inspector.py ./Inspector.py

COPY pylab.py ./pylab.py

COPY six.py ./six.py

COPY cycler.py ./cycler.py

COPY action.py ./action.py