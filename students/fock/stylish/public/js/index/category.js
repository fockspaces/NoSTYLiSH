const fetchDataBycategory = async (category, paging) => {
  try {
    // Send an Axios request to your API server with the search query
    const response = await axios.get(
      `http://52.194.142.24/api/1.0/products/${category}`,
      {
        params: {
          paging: paging,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log("category not found or out of page");
    return null;
  }
};

export { fetchDataBycategory };
