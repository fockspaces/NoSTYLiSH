const Product = ({ product, productChange }) => {
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
        <input
          className="form-control"
          type="text"
          name="category"
          value={product.category}
          onChange={productChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="main_image">main_image</label>
        <input
          className="form-control"
          type="text"
          name="main_image"
          value={product.main_image}
          onChange={productChange}
          required
        />
      </div>
    </div>
  );
};

export default Product;
