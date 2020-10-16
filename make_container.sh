#!/bin/bash
# build_container.sh <port>
FILE=Dockerfile
if [ ! -f "$FILE" ]
then
    echo "$FILE does not exist"
    echo "Exit script"
    exit 1
fi
BUILD_DATE=`date -u +'%Y-%m-%dT%H:%M:%SZ'`
COMMIT_ID=$(git rev-parse --verify HEAD)
COMMIT_ID=${COMMIT_ID:0:8}
VER=`date -u +'%Y%m%d'`
VER="${VER}_${COMMIT_ID}"
TAG=${PWD##*/}
DIR=$2
TIMEZONE="TZ=Asia/Hong_Kong"
sudo docker build --build-arg BUILD_DATE=$BUILD_DATE --build-arg TITLE=$TAG -t $TAG:$VER .
EXIST=`sudo docker inspect --format "{{ index .Config.Labels \"org.opencontainers.image.title\"}}" $TAG`
if [ "$TAG" == "$EXIST" ]
then
    echo "Container with the same name is found. Remove container."
    sudo docker stop $TAG > /dev/null
    sudo docker rm $TAG
fi
if [ $# -eq 0 ]
then
    DOCKER_HOST_PORT=80
    echo "argument Docker Host Port not provided. Port set to $DOCKER_HOST_PORT by default"
else
    DOCKER_HOST_PORT=$1
fi
APP_PORT=80
sudo docker run -d --name $TAG -p $DOCKER_HOST_PORT:$APP_PORT --restart unless-stopped -e $TIMEZONE $TAG:$VER
