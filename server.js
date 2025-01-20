const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(express.static(path.join(__dirname, 'contact_us')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact_us', 'contact.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
