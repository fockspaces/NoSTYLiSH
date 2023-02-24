const searchForm = document.querySelector("form");
const searchInput = document.querySelector("#search-input");

searchForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent the form from submitting normally

  const searchQuery = searchInput.value ? searchInput.value.trim() : "";
  const newUrl = `/index?keyword=${searchQuery}`;
  window.location.href = newUrl;
});
