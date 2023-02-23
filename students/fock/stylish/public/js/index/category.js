const fetchDataBycategory = async (category, paging) => {
  try {
    // Send an Axios request to your API server with the category
    const endpoint = `http://52.194.142.24/api/1.0/products/${category}${
      paging ? `?paging=${paging}` : ""
    }`;
    const response = await axios.get(endpoint);

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { fetchDataBycategory };
