// const fetchDataBycategory = async (category, paging) => {
//   const endpoint = `http://52.194.142.24/api/1.0/products/${category}${
//     paging ? `?paging=${paging}` : ""
//   }`;

//   try {
//     const response = await axios.get(endpoint);
//     return {
//       data: response.data.data,
//       next_paging: response.data.next_paging,
//     };
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };

// let productData = null;


// const womenLink = document.getElementById("women-link");
// womenLink.addEventListener("click", async (event) => {
//   event.preventDefault(); // prevent the default link behavior

//   const category = "women";
//   const data = await fetchDataBycategory(category);

//   console.log(data);
//   productData = data.data;
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const fetchDataBycategory = async (category, paging) => {
//       // Your code to fetch data using axios goes here
//     };
  
//     const womenLink = document.getElementById('women-link');
//     womenLink.addEventListener('click', async (event) => {
//       event.preventDefault();
//       const category = 'women';
//       const data = await fetchDataBycategory(category);
//       console.log(data);
//     });
//   });
  