const express = require ('express');
const app = express();
require('dotenv').config();

app.get('/', (req, res) => {
  res.send({ message: process.env.MESSAGE });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
