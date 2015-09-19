# hackathon

----------

the application is reachable here: [http://hackathon-secanis.rhcloud.com](http://hackathon-secanis.rhcloud.com)

### clone repository

	git clone https://github.com/wollio/hackathon.git

install dependencies

	cd ./hackathon
	bower install
	
	cd ./api
	composer install


> **notice:** 
> you have to install the dependencies because the app/source folder
> and the api/composer folder are in the git ignore file*

### start application

php integrated webserver

	php -S localhost:8080

visit [http://localhost:8080](http://localhost:8080)

> **notice:**
> *if you have an pdo driver error please check that you have discomment the pdo_mysql driver in the php.ini file. Restart the webserver after changes on php.ini!*

### database

**SQL-DB Development**

	user: admin566hHtJ
	password: vix9XNRF3cT_
	database: hackathon
	host: secanis.ch

**SQL-DB Production**

[https://hackathon-secanis.rhcloud.com/phpmyadmin](https://hackathon-secanis.rhcloud.com/phpmyadmin)

	user: admin566hHtJ
	password: vix9XNRF3cT_
	database: hackathon
	host: localhost

> **notice:** *direct access on the production database won't work because we need a SSH certifacte, it's the easier way over two databases!*


### installation

1. <code>npm install -g cordova ionic</code>
2. <code>ionic serve</code>
3. visit <a href="http://localhost:8100/">http://localhost:8100/</a>


### more information

* [http://slimframework.com/](http://slimframework.com)
* [http://medoo.in](http://medoo.in/)
