const express = require('express');

const setMiddlewares = require('./middlewares');
const setRoutes = require('./routes');
const initDb = require('./data/db');

const app = express();

setMiddlewares(app);
setRoutes(app);

const port = process.env.PORT || 8080;

initDb({
  connectionString: 'mongodb://oded:password1@ds115523.mlab.com:15523/users'
}).then(() => {
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
})
.catch(err => {
  console.log(err);
});
