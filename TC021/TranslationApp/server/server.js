const express = require('express');
var cors = require('cors');
const http = require('http');
const path = require('path');
const translate = require('./translate');

const app = express();
const bodyParser = require('body-parser')

app.use(cors());
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

const port = 3001;

app.use(express.static(__dirname + '/dist/TranslationApp'));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

app.post('/translate', async (req, res) => res.send(await translate(req.body.text)))

const server = http.createServer(app);

server.listen(port, () => console.log(`App running on: http://localhost:${port}`));