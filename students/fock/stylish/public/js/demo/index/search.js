
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
    console.log("search items not found or out of page");
  }
};

export { fetchDataByKeyword };
