const loginForm = document.getElementById("login");
const loginButton = document.querySelector("button");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = loginForm.email.value;
  const password = loginForm.password.value;
  try {
    const response = await axios.post("/api/1.0/user/signin", {
      provider: "native",
      email,
      password,
    });
    const { access_token, user } = response.data.data;

    console.log(access_token, user);

    // save JWT Token and user info
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("user", JSON.stringify(user));

    // redirect to profile page
    window.location.href = "/profile";
  } catch (error) {
    // handle error
    console.log(error);

    const message = JSON.stringify(error.response.data);
    alert(message);
  }
});


