// הצגת הודעה כאשר לוחצים על תפריט
document.querySelectorAll("nav ul li a").forEach((link) => {
    link.addEventListener("click", () => {
      alert(`You clicked on: ${link.textContent}`);
    });
  });
document.addEventListener("DOMContentLoaded", function () {
    const dropdownButtons = document.querySelectorAll(".dropdown-button");

    dropdownButtons.forEach(button => {
        button.addEventListener("click", function () {
            const dropdownContainer = this.parentElement;
            dropdownContainer.classList.toggle("active");
        });
    });

    // סגירת כל התפריטים כאשר לוחצים מחוץ לתיבה
    document.addEventListener("click", function (e) {
        document.querySelectorAll(".dropdown-container").forEach(container => {
            if (!container.contains(e.target)) {
                container.classList.remove("active");
            }
        });
    });
});

