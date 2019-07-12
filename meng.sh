cd ~/temp
git pull
cp -r ~/temp/meng /opt/tomcat/apache-tomcat-8.5.43/webapps
cd ~/temp/meng
nohup java -jar gs-mysql-data-0.1.0.jar
cp ~/temp/meng.sh ~