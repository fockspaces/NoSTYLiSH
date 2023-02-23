const fetchDataBycategory = async (category, paging) => {
  try {
    // Send an Axios request to your API server with the category
    const endpoint = `http://52.194.142.24/api/1.0/products/${category}${
      paging ? `?paging=${paging}` : ""
    }`;
    const response = await axios.get(endpoint);
    // Process the search results
    renderProducts(response.data.data);

    // update the URL without redirecting
    window.history.pushState(null, null, newUrl);

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const categoryHandler = async () => {
  console.log("hi");
  // fetch products
  // render products
  // change url
};

export { fetchDataBycategory };
