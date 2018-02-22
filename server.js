'use strict';

const https = require('https');
const express = require('express');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const HOST = 'localhost';
const clientAppPath = path.join(__dirname, './client.html');

const options = {
  key: fs.readFileSync(path.join(__dirname, './keys/server-key.pem')),
  cert: fs.readFileSync(path.join(__dirname, './keys/server-cert.pem'))
};

const app = express();
const httpsServer = https.createServer(options, app);

app.get('/', (req, res) => {
  res.sendFile(clientAppPath);
});

httpsServer.listen({ port: PORT, host: HOST }, () => {
  console.log('Server is listening at https://' + HOST + ':' + PORT);
});