
FROM openjdk:9-jdk-slim
VOLUME /tmp
ARG JAR_FILE=baiduzhidao.jar
COPY ${JAR_FILE} baiduzhidao.jar
EXPOSE 9090
ENTRYPOINT exec java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar baiduzhidao.jar
