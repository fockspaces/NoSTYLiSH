const fetchItemByID = async (id) => {
  try {
    // Send an Axios request to your API server with the search query
    const response = await axios.get(
      `/api/1.0/products/details`,
      {
        params: {
          id,
        },
      }
    );
    return response.data.data[0];
  } catch (error) {
    console.log("item not found");
    return false;
  }
};

export { fetchItemByID };
