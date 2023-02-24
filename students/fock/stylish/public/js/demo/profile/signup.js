const signupForm = document.querySelector("#signup");
signupForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const name = document.querySelector("#username").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  try {
    const response = await axios.post(
      "http://52.194.142.24/api/1.0/user/signup",
      {
        name,
        email,
        password,
      }
    );

    const { access_token, user } = response.data.data;
    console.log(access_token, user);

    // save JWT Token and user info
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("user", JSON.stringify(user));

    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };

    // redirecting to profile page
    await axios.get("/profile", config);

  } catch (error) {
    // handle error
    console.log(error);
    const message = JSON.stringify(error.response.data);
    alert(message);
  }
});
