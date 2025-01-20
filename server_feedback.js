const express = require('express');
const path = require('path');

const app = express();
const PORT = 8081; 
app.use(express.static(path.join(__dirname, 'feedback')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'feedback', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Feedback server is running on http://127.0.0.1:${PORT}`);
});
