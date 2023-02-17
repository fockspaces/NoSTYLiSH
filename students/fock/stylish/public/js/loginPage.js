window.fbAsyncInit = function () {
  FB.init({
    appId: 490231069780671,
    cookie: true,
    xfbml: true,
    version: "v12.0",
  });
};

function loginWithFacebook() {
  FB.login(
    function (response) {
      if (response.authResponse) {
        var accessToken = response.authResponse.accessToken;
        // Send the accessToken to your server to authenticate the user
      } else {
        // User cancelled the login or did not fully authorize your app
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
