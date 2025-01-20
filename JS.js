document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector(".contact-container form");
    const contactNotification = document.getElementById("contact-notification");
  
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault(); 
  
      const name = contactForm.querySelector('input[placeholder="Your Name"]').value.trim();
      const issue = contactForm.querySelector('textarea[placeholder="Describe the issue"]').value.trim();
  
      if (!name || !issue) {
        alert("Please fill out all fields!");
        return;
      }
  
      contactNotification.textContent = `Thank you, ${name}! Your message has been submitted successfully.`;
      contactNotification.style.display = "block";
  
      setTimeout(() => {
        contactNotification.style.display = "none";
      }, 60000);
  
      contactForm.reset(); 
    });
  
    const feedbackForm = document.querySelector(".feedback-container form");
    const feedbackNotification = document.getElementById("feedback-notification");
  
    feedbackForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const rating = feedbackForm.querySelector("select").value;
      const feedback = feedbackForm.querySelector('textarea[placeholder="Write your feedback..."]').value.trim();
  
      if (!rating || !feedback) {
        alert("Please fill out all fields!");
        return;
      }
  
      feedbackNotification.textContent = "Thank you! Your feedback has been submitted successfully.";
      feedbackNotification.style.display = "block";
  
      setTimeout(() => {
        feedbackNotification.style.display = "none";
      }, 60000);
  
      feedbackForm.reset(); 
    });
  });
  