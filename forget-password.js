// forget-password.js

// פונקציה לבדיקת אימייל תקין
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // תבנית אימייל תקין
    return emailRegex.test(email);
}

// פונקציה לשליחת אימייל איפוס סיסמה
async function sendResetEmail(email) {
    if (!validateEmail(email)) {
        throw new Error('Invalid email address');
    }

    // סימולציה של שליחת אימייל
    console.log(`Sending password reset email to: ${email}`);
    
    // החזרת הודעת הצלחה
    return { success: true, message: 'Reset email sent successfully.' };
}

// ייצוא הפונקציות
module.exports = { validateEmail, sendResetEmail };
