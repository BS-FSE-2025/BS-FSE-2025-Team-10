document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    
    const name = form.querySelector('input[placeholder="Name"]').value.trim();
    const description = form.querySelector('textarea[placeholder="Describe the issue"]').value.trim();

    
    if (!name || !description) {
      alert("Please fill out all fields!"); 
      return;
    }

    
    alert(`Thank you, ${name}! Your technical issue has been submitted.`);
    form.reset(); 
  });
});

