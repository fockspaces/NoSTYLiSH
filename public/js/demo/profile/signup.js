const signupForm = document.querySelector("#signup");
signupForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const name = document.querySelector("#username").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  try {
    const response = await axios.post("/api/1.0/user/signup", {
      name,
      email,
      password,
    });

    const { access_token, user } = response.data.data;

    // save JWT Token and user info
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("user", JSON.stringify(user));

    // redirect to profile page
    window.location.href = "/profile";
  } catch (error) {
    // handle error
    console.log(error);
    const errors = error.response.data.err;

    let message = "";
    if (typeof errors === "object") {
      for (const key in errors) {
        if (errors.hasOwnProperty(key)) {
          message += `${key}: ${errors[key]}\n`;
        }
      }
    } else message = errors;
    alert(message);
  }
});
