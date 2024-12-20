function validateForm() {
    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    // בדיקה אם השדות ריקים
    if (!firstName || !lastName || !username || !password || !confirmPassword || !email || !phone) {
        alert("Please fill out all fields.");
        return false;
    }

    // בדיקה אם הסיסמאות תואמות
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    // בדיקה אם הסיסמא עומדת בתנאים: לפחות 8 תווים, אות גדולה ואות קטנה
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordPattern.test(password)) {
        alert("Password must be at least 8 characters long, and include at least one uppercase letter and one lowercase letter.");
        return false;
    }

    // בדיקה אם האימייל חוקי
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // בדיקה אם מספר הטלפון חוקי
    const phonePattern = /^[0-9]{10}$/; // 10 ספרות
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    alert("Sign Up Successful!");
    return true; // אם כל הבדיקות עוברות
}
