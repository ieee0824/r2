FROM node:latest

WORKDIR /root/r2

COPY . .

RUN set -e \
	&& yarn install
