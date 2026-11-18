const form = document.getElementById("contact-form");
const out = document.getElementById("form-status");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  out.textContent = "it does nothing actually bare with it";
  form.reset()
});
