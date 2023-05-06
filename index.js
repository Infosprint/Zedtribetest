const express = require('express');
const routes = require('./routes');
const flight = require('./flight')


const app = express();

app.use(express.json());

app.use('/notes', routes);
app.use('/', flight);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
