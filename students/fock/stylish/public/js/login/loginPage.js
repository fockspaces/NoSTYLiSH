window.fbAsyncInit = function () {
  FB.init({
    appId: 490231069780671,
    cookie: true,
    xfbml: true,
    version: "v12.0",
  });
};
document.getElementById("success-message").style.display = "none";
document.getElementById("profile-display").style.display = "none";
document.getElementById("login-message").style.display = "none";

// Retrieve access token from local storage
const access_token = localStorage.getItem("access_token");

if (access_token) {
  // Hide the login button and show a success message
  document.getElementById("facebook-login").style.display = "none";
  document.getElementById("success-message").style.display = "block";
  document.getElementById("profile-display").style.display = "block";
}

function loginWithFacebook() {
  FB.login(
    function (response) {
      if (response.authResponse) {
        const accessToken = response.authResponse.accessToken;

        OAuthLogin(accessToken)
          .then(function (res) {
            const data = res.data.data;
            console.log(data);
            JWT_Token = data.access_token;

            // Hide the login button and show a success message
            document.getElementById("facebook-login").style.display = "none";
            document.getElementById("success-message").style.display = "block";
            document.getElementById("profile-display").style.display = "block";

            // Save access token to local storage
            localStorage.setItem("access_token", JWT_Token);
          })
          .catch(function (e) {
            console.log(e.message);
          });
      } else {
        // User cancelled the login or did not fully authorize your app
        console.log("not valid");
      }
    },
    { scope: "public_profile,email" }
  );
}

document
  .getElementById("facebook-login")
  .addEventListener("click", loginWithFacebook);

(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

const OAuthLogin = function (token) {
  return new Promise(function (resolve, reject) {
    axios
      .post("/api/1.0/user/signin", {
        provider: "facebook",
        access_token: token,
      })
      .then(function (res) {
        resolve(res);
      })
      .catch(function (e) {
        reject(new Error(e.message));
      });
  });
};

// profile display
const profileButton = document.getElementById("profile-display");

profileButton.addEventListener("click", async function () {
  try {
    // get the JWT token from local storage
    const token = localStorage.getItem("access_token");

    // make a GET request to the server with the JWT token in the authorization header
    const response = await axios.get("/api/1.0/user/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    profileButton.style.display = "none";

    // todo : store in local
    const userInfo = response.data.data;
    console.log(userInfo);
  } catch (error) {
    console.log("token has expired or incorrect, please login again");
    localStorage.removeItem("access_token");
    location.reload();

    console.error(error);
  }
});
