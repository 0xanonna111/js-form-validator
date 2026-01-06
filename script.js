function validateForm() {
  let valid = true;

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  document.getElementById("userError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("passError").innerText = "";

  if (username.length < 3) {
    document.getElementById("userError").innerText =
      "Username must be at least 3 characters";
    valid = false;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    document.getElementById("emailError").innerText = "Invalid email address";
    valid = false;
  }

  if (password.length < 6) {
    document.getElementById("passError").innerText =
      "Password must be at least 6 characters";
    valid = false;
  }

  return valid;
}
