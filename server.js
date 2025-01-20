<<<<<<< HEAD
const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

// تعيين المجلد الثابت (contact_us داخل المجلد)
app.use(express.static(path.join(__dirname, 'contact_us')));

// توجيه المستخدم إلى contact.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact_us', 'contact.html'));
});

// تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
=======
const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

// تعيين المجلد الثابت (contact_us داخل المجلد)
app.use(express.static(path.join(__dirname, 'contact_us')));

// توجيه المستخدم إلى contact.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact_us', 'contact.html'));
});

// تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
>>>>>>> 8eb38ee1b7846e0037d078de666dd3763811eb39
