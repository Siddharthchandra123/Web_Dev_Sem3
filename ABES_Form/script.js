document.addEventListener("DOMContentLoaded", function() {
  const userForm = document.getElementById("userForm");
  const displayName = document.getElementById("displayName");

  if (userForm) {
    userForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const firstName = document.getElementById("Firstname").value.trim();
      const lastName = document.getElementById("Lastname").value.trim();
      const fullName = `${firstName} ${lastName}`.trim();
      sessionStorage.setItem("fullName", fullName);
      window.location.href = "intropage.html";
    });
  }

  if (displayName) {
    const storedName = sessionStorage.getItem("fullName");
    displayName.textContent = storedName || "Guest";
  }
});


