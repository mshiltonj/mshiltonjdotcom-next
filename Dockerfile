FROM ubuntu:latest
RUN apt update -y
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_20.x  | bash -
RUN DEBIAN_FRONTEND=noninteractive apt-get -y install nodejs git vim s3cmd unzip
RUN npm install -g yarn 
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && \
    unzip awscliv2.zip && \
    ./aws/install

EXPOSE 3000

RUN adduser appuser

COPY --chown=appuser:appuser . /home/appuser/app

USER appuser 
WORKDIR /home/appuser/app