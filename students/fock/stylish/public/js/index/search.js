const searchForm = document.querySelector("form");
const searchInput = document.querySelector("#search-input");

const fetchDataByKeyword = async (keyword, paging) => {
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
    return response.data;
  } catch (error) {
    console.log("Items not found");
  }
};

searchForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent the form from submitting normally

  const searchQuery = searchInput.value ? searchInput.value.trim() : "";
  const currentUrl = window.location.href;
  const urlObj = new URL(currentUrl);
  urlObj.searchParams.set("keyword", searchQuery);
  const newUrl = urlObj.toString();
  window.location.href = newUrl;
});

export { fetchDataByKeyword };
