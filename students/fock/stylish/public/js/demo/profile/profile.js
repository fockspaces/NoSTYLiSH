
async function getUserProfile() {
  // check if there's auth_token
  const access_token = localStorage.getItem("access_token");
  const url = "api/1.0/user/profile";

  try {
    // verify token and get profile
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    renderProfile(response.data.data);
    // yes, render profile
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
    // no, go to signup / login page
    window.location.href = "/login";
  }
}
getUserProfile();

function renderProfile(user) {
    const profileContainer = document.querySelector("#profile-container");
  
    const profileHtml = `
      <div class="container">
        <div class="row profile-row">
          <div class="col-md-3">
            <div class="profile-img">
              <img src="${user.picture || '/images/member_default.png'}" alt="User picture" class="rounded-circle">
            </div>
          </div>
          <div class="col-md-9">
            <div class="profile-head">
              <h2>${user.name}</h2>
              <h6>${user.provider} user</h6>
              <p class="profile-email">${user.email}</p>
            </div>
          </div>
        </div>
        <div class="row profile-row">
          <div class="col-md-12">
            <hr>
          </div>
        </div>
        <div class="row profile-row">
          <div class="col-md-4">
            <p class="profile-info">My Orders</p>
            <p class="profile-info-value">0</p>
          </div>
          <div class="col-md-4">
            <p class="profile-info">Followers</p>
            <p class="profile-info-value">0</p>
          </div>
          <div class="col-md-4">
            <p class="profile-info">Following</p>
            <p class="profile-info-value">0</p>
          </div>
        </div>
      </div>
    `;
  
    profileContainer.innerHTML = profileHtml;
  }
  