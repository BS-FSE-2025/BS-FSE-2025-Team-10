document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("worker-form");
  const notification = document.getElementById("notification");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const message = document.getElementById("message").value.trim();

    if (!message) {
      alert("Please describe the issue!");
      return;
    }

    notification.textContent = `Thank you! Your issue has been sent to the admin.`;
    notification.style.display = "block";

    setTimeout(() => {
      notification.style.display = "none";
    }, 5000);

    form.reset();
  });
});
