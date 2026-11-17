const express = require('express');
const compression = require('compression');
const app = express();

app.use(compression());
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
