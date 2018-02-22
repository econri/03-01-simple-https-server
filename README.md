# Доклад №3: "Серверная часть сетевого приложения"

### Пример №1. Пример HTTPS сервера (NodeJS)

##### Установка и запуск

1. Установить [Node.js](https://nodejs.org/en/) и [Git](https://git-scm.com/downloads) (по желанию)
2. Клонировать или загрузить проект в виде архива

В консоли/терминале:
``` bash
# Перейти в папку, в которую планируется клонирование проекта, например:
$ cd /Projects
# Клонировать проект из репозитория
$ git clone https://github.com/econri/03-01-simple-https-server.git
```

3. Сгенерировать ключ с именем `server-key.pem` и сертификат с именем `server-cert.pem`
Например, в консоли/терминале (Ubuntu 16.04):

``` bash
# Перейти в папку проекта
$ cd 03-01-simple-https-server
$ openssl genrsa -out ./keys/server-key.pem 1024
$ openssl req -new -key ./keys/server-key.pem -out ./keys/certrequest.csr
$ openssl x509 -req -in ./keys/certrequest.csr -signkey ./keys/server-key.pem -out ./keys/server-cert.pem
```

4. Установить зависимости и запустить

В консоли/терминале:

``` bash
# Установить зависимости
$ npm install
# Запустить
$ npm start
```
##### Ссылки:

1. [Node.js HTTPS](https://nodejs.org/api/https.html)
2. [Express.js API](http://expressjs.com/en/4x/api.html)