document.addEventListener("DOMContentLoaded", () => {
    const role = localStorage.getItem("userRole"); // التحقق من الدور في Local Storage
  
    if (role === "user") {
      window.location.href = "user.html"; // التوجيه إلى صفحة User
    } else if (role === "worker") {
      window.location.href = "worker.html"; // التوجيه إلى صفحة Worker
    } else {
      console.log("No role selected. User stays on the main page."); // البقاء على الصفحة الرئيسية
    }
  });
  
  // وظيفة لتبديل الدور عند الاختيار
  function switchRole(newRole) {
    localStorage.setItem("userRole", newRole); // تخزين الدور الجديد
    alert(`You registered as a ${newRole}.`); // عرض رسالة تأكيد
    window.location.reload(); // تحديث الصفحة لتطبيق التغيير
  }
  