#
# BudgetTracker Dockerfile for UI
#
FROM ubuntu:latest
MAINTAINER Arunkumar Srisailapathi "sail.arunkumar@gmail.com"

RUN apt-get update
RUN apt-get install -y nginx nodejs
ADD ./dist/ /app/

WORKDIR /app