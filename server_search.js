const express = require('express');
const path = require('path');

const app = express();
const PORT = 8082; 

app.use(express.static(path.join(__dirname, 'search')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'search', 'search.html'));
});

app.get('/result', (req, res) => {
  res.sendFile(path.join(__dirname, 'search', 'result.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
