<<<<<<< HEAD
const express = require('express');
const path = require('path');

const app = express();
const PORT = 8082; // اختاري رقم منفذ مناسب

// تعيين المجلد الثابت الذي يحتوي على ملفات الـ HTML
app.use(express.static(path.join(__dirname, 'search')));

// التوجيه إلى صفحة search.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'search', 'search.html'));
});

// التوجيه إلى صفحة result.html
app.get('/result', (req, res) => {
  res.sendFile(path.join(__dirname, 'search', 'result.html'));
});

// تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
=======
const express = require('express');
const path = require('path');

const app = express();
const PORT = 8082; // اختاري رقم منفذ مناسب

// تعيين المجلد الثابت الذي يحتوي على ملفات الـ HTML
app.use(express.static(path.join(__dirname, 'search')));

// التوجيه إلى صفحة search.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'search', 'search.html'));
});

// التوجيه إلى صفحة result.html
app.get('/result', (req, res) => {
  res.sendFile(path.join(__dirname, 'search', 'result.html'));
});

// تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
>>>>>>> 8eb38ee1b7846e0037d078de666dd3763811eb39
