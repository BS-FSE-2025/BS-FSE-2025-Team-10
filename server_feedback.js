const express = require('express');
const path = require('path');

const app = express();
const PORT = 8081; // منفذ مختلف عن السيرفر الآخر

// تعيين المجلد الثابت للـ feedback
app.use(express.static(path.join(__dirname, 'feedback')));

// التوجيه إلى صفحة feedback
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'feedback', 'index.html'));
});

// تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`Feedback server is running on http://127.0.0.1:${PORT}`);
});
