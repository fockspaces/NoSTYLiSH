import axios from "axios";

const sentForm = async (data) => {
  try {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }

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
