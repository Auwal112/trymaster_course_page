const express = require('express');
const compression = require('compression');
const app = express();

app.use(compression());
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
