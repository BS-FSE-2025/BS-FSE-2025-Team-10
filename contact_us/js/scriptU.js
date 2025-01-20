document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("user-form");
  const notification = document.getElementById("notification");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const recipient = document.getElementById("recipient").value;
    const message = document.getElementById("message").value.trim();

    if (!recipient || !message) {
      alert("Please fill out all fields!");
      return;
    }

    notification.textContent = `Thank you! Your issue has been sent to the ${recipient}.`;
    notification.style.display = "block";

    setTimeout(() => {
      notification.style.display = "none";
    }, 5000);

    form.reset();
  });
});
