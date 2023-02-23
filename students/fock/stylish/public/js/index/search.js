const searchForm = document.querySelector("form");
const searchInput = document.querySelector("#search-input");

const fetchDataByKeyword = async (keyword, paging) => {
  // get current URL
  const currentUrl = window.location.href;

  // create new URL based on current URL, if keyword is not already present
  let newUrl;
  if (currentUrl.includes("/search")) {
    newUrl = currentUrl.replace(/keyword=[^&]*/, `keyword=${keyword}`);
  } else {
    newUrl = currentUrl + `/search?keyword=${keyword}`;
  }

  if (paging) {
    newUrl += `&paging=${paging}`;
  }

  try {
    // Send an Axios request to your API server with the search query
    const response = await axios.get(
      "http://52.194.142.24/api/1.0/products/search",
      {
        params: {
          keyword: keyword,
          paging: paging,
        },
      }
    );
    // update the URL without redirecting
    window.history.pushState(null, null, newUrl);
    // Process the search results
    return response.data;
  } catch (error) {
    console.log("Items not found");
  }
};

const searchHandler = async () => {};

searchForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent the form from submitting normally

  const searchQuery = searchInput.value;

  const response = await fetchDataByKeyword(searchQuery, paging);
  if (!response) return;

  // Process the search results
  renderProducts(response.data);
});

export { fetchDataByKeyword };
