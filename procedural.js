const form = document.getElementById("user-input");

function signupHandler(event) {
  event.preventDefault();

  const usernameInput = document.getElementById("username");
  const enteredUsername = usernameInput.value;

  const passwordInput = document.getElementById("password");
  const enteredPassword = passwordInput.value;

  if (enteredUsername.trim().length === 0) {
    alert("Invalid input - username must not be empty!");
    return;
  }
  if (enteredPassword.trim().length <= 5) {
    alert("Invalid input - password must be 6 characters or longer");
    return;
  }

  const user = {
    username: enteredUsername,
    password: enteredPassword
  };

  console.log(user);
  console.log("Hi, I'm " + user.username);
}

form.addEventListener("submit", signupHandler);
