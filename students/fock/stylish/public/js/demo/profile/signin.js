const loginForm = document.getElementById("login");
const loginButton = document.querySelector("button");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = loginForm.email.value;
  const password = loginForm.password.value;
  try {
    const response = await axios.post(
      "http://52.194.142.24/api/1.0/user/signin",
      {
        provider: "native",
        email,
        password,
      }
    );
    const { access_token, user } = response.data;

    console.log(access_token, user);
    return;
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "/profile";
  } catch (error) {
    if (error.response) {
      const errorMessage = error.response.data.message;
      loginErrorMsg.innerHTML = errorMessage;
      loginErrorMsg.style.opacity = 1;
    } else {
      console.error(error);
    }
  }
});
