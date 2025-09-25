// Form validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function (e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      e.preventDefault();
    } else if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      e.preventDefault();
    }
  });

  // Toggle extra info
  const toggleBtn = document.querySelector(".toggle-btn");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      const info = document.getElementById("extra-info");
      if (info.style.display === "none" || info.style.display === "") {
        info.style.display = "block";
      } else {
        info.style.display = "none";
      }
    });
  }
});
