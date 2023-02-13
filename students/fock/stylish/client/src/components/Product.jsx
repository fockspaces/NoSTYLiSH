import { useState } from "react";
const Product = ({ product, productChange, imageChange }) => {
  const [mainImage, setMainImage] = useState(product.main_image);

  const handleMainImageChange = (e) => {
    setMainImage(e.target.files[0]);
    imageChange(e.target.files[0]);
  };

  return (
    <div className="Product">
      <div className="form-group">
        <label htmlFor="title">title</label>
        <input
          className="form-control"
          type="text"
          name="title"
          value={product.title}
          onChange={productChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">description</label>
        <input
          className="form-control"
          type="text"
          name="description"
          value={product.description}
          onChange={productChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="category">category</label>
        <select
          className="form-control"
          name="category"
          value={product.category}
          onChange={productChange}
          required
        >
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="accessories">Accessories</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="main_image">main_Image</label>
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="main_image"
            name="main_image"
            onChange={handleMainImageChange}
            accept="image/*"
          />
          <div>
            {mainImage
              ? `Selected file: ${mainImage.name}`
              : "No file selected"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
