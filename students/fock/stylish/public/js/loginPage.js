window.fbAsyncInit = function () {
  FB.init({
    appId: 490231069780671,
    cookie: true,
    xfbml: true,
    version: "v12.0",
  });
};
document.getElementById("success-message").style.display = "none";

function loginWithFacebook() {
  FB.login(function (response) {
    if (response.authResponse) {
      const accessToken = response.authResponse.accessToken;
      OAuthLogin(accessToken).then(function (res) {
        console.log(res);
        // Hide the login button and show a success message
        document.getElementById("facebook-login").style.display = "none";
        document.getElementById("success-message").style.display = "block";
      }).catch(function (e) {
        console.log(e.message);
      });
    } else {
      // User cancelled the login or did not fully authorize your app
      console.log("not valid");
    }
  }, { scope: "public_profile,email" });
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
    axios.post("/api/1.0/user/signin", {
      provider: "facebook",
      access_token: token,
    }).then(function (res) {
      resolve(res);
    }).catch(function (e) {
      reject(new Error(e.message));
    });
  });
};
