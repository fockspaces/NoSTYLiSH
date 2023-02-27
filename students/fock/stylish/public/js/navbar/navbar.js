function renderNavbar(currentUser) {
  const navbarContainer = document.querySelector("#navbar-container");

  const navbarHtml = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/index?category=all" id="all-link">Stylish</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav me-auto mb-2 mb-lg-0">
              <a class="nav-link active" aria-current="page" href="/index?category=women" id="women-link">Women</a>
              <a class="nav-link active" aria-current="page" href="/index?category=men" id="men-link">Men</a>
              <a class="nav-link active" aria-current="page" href="/index?category=accessories" id="accessories-link">Accessories</a>
            </div>
            <div class="navbar-nav ml-auto">
              <form class="d-flex">
                <input class="form-control" type="search" placeholder="Search" aria-label="Search" id="search-input">
                <button class="btn btn-outline-success ml-4" type="submit">
                  <img src="/images/search-hover.png" alt="Search" height="30px">
                </button>
              </form>
                <a class="btn-outline-success" href="/checkout">
                    <div class="header__link-icon-cart">                    
                    <img src="/images/cart-hover.png" alt="Cart" height="30px">
                      <div class="header__link-icon-cart-number">${
                        localStorage.getItem("cart_number") || 0
                      }</div>
                    </div>
                </a>
                <div class="dropdown">
                  <button class="btn  dropdown-toggle btn-outline-success" type="button" id="user-menu" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="/images/member-hover.png" alt="User Icon" height="30px">
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="user-menu">
                    ${
                      currentUser
                        ? `
                      <li>
                        <a class="dropdown-item" href="/profile">My Profile</a>
                      </li>
                      <li>
                          <a class="btn dropdown-item" type="submit" id="logout-btn">Logout</a>
                      </li>
                    `
                        : `
                      <li>
                        <a class="dropdown-item" href="/signup">Signup</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/login">Login</a>
                      </li>
                    `
                    }
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `;

  navbarContainer.innerHTML = navbarHtml;

  // implement search
  const searchForm = document.querySelector("form");
  const searchInput = document.querySelector("#search-input");

  searchForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent the form from submitting normally

    const searchQuery = searchInput.value ? searchInput.value.trim() : "";
    const newUrl = `/index?keyword=${searchQuery}`;
    window.location.href = newUrl;
  });

  // implement logout
  if (currentUser) {
    const logoutButton = document.querySelector("#logout-btn");

    // add an event listener to the logout button
    logoutButton.addEventListener("click", () => {
      // remove the access_token and currentUser items from localStorage
      localStorage.removeItem("access_token");
      localStorage.removeItem("user");
      currentUser = null;
      window.location.href = "/index";
    });
  }
}

// check if login (has user info)
let currentUser = localStorage.getItem("user");
renderNavbar(currentUser);
