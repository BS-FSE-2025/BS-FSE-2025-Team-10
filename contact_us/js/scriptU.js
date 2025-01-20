document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const notification = document.getElementById("contact-notification");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const name = document.getElementById("name").value.trim();
      const recipient = document.getElementById("recipient").value;
      const issue = document.getElementById("issue").value.trim();
  
      if (!name || !recipient || !issue) {
        alert("Please fill out all fields!");
        return;
      }
  
      notification.textContent = `Thank you, ${name}! Your message has been sent to ${recipient}.`;
      notification.style.display = "block";
  
      setTimeout(() => {
        notification.style.display = "none";
      }, 60000);
  
      form.reset(); 
    });
  });
  
