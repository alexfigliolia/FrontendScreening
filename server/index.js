const express = require('express');
const path = require('path');
const app = express();
const PORT = 3030;

app.use(express.static(path.join(__dirname, '../dist')))

app.listen(PORT, (err) => {
  if (err) {
    throw new Error
  } else {
    console.log(`Server is listening on port ${PORT}`);
  }
});