const searchForm = document.querySelector("form");
const searchInput = document.querySelector("#search-input");

searchForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent the form from submitting normally

  const searchQuery = searchInput.value;
  const url = `/search?keyword=${searchQuery}`; // the new URL to set

  try {
    // Send an Axios request to your API server with the search query
    const response = await axios.get(
      "http://52.194.142.24/api/1.0/products/search",
      {
        params: {
          keyword: searchQuery,
        },
      }
    );
    // Process the search results
    renderProducts(response.data.data);
  } catch (error) {
    console.log("Items not found");
  }
});
