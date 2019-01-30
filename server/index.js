const next = require('next');
const routes = require('../routes');
const app = next({ dev:process.env.NODE_ENV !== 'production' });
const handler = routes.getRequestHandler(app);
const express = require('express');


const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const compression = require('compression');

const config = require('./config');
const bookRoutes = require('./routes/book');

const PORT = process.env.PORT || 3000;

mongoose.connect(config.DB_URI, { useNewUrlParser: true})
.then(() => console.log('Database Connected!'))
.catch(err => console.error(err));


app.prepare()
.then(() => {
  const server = express()
  server.use(compression());
  server.use(bodyParser.json());

 server.use('/api/v1/books', bookRoutes);

  server.get('*', (req, res) => {
    return handler(req, res)
  })

  server.use(handler).listen(PORT, (err) => {
    if (err) throw err
    console.log('> Ready on ' + PORT)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})