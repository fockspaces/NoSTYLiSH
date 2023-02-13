import { useState } from "react";
const Product = ({
  product,
  productChange,
  imageChange,
  otherImagesChange,
}) => {
  const [mainImage, setMainImage] = useState(product.main_image);
  const [other_images, setOtherImages] = useState(product.other_images);

  const handleMainImageChange = (e) => {
    imageChange(e.target.files[0]);
    setMainImage(e.target.files[0]);
  };

  const handleOtherImagesChange = (e) => {
    otherImagesChange(e.target.files);
    setOtherImages(e.target.files);
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
          <option value="">select a category</option>
          <option value={1}>Men</option>
          <option value={2}>Women</option>
          <option value={3}>Accessories</option>
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
            {mainImage.name
              ? `Selected file: ${mainImage.name}`
              : "No file selected"}
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="other_images">other_images</label>
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="other_images"
            name="other_images"
            onChange={handleOtherImagesChange}
            accept="image/*"
            multiple
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
