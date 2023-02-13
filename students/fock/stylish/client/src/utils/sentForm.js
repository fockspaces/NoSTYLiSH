import axios from "axios";

const sentForm = async (data) => {
  try {
    const formData = new FormData();
    console.log(data);
    formData.append("product", JSON.stringify(data.product));
    formData.append("category", JSON.stringify(data.category));
    formData.append("items", JSON.stringify(data.items));
    formData.append("main_image", data.product.main_image);

    const res = await axios.post(
      "http://localhost:8000/api/products/create",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return res;
  } catch (err) {
    return err;
  }
};

export default sentForm;
