const Category = ({ category, categoryChange }) => {
  return (
    <div className="Category">
      <div className="form-group">
        <label htmlFor="texture">texture</label>
        <input
          className="form-control"
          type="text"
          name="texture"
          value={category.texture}
          onChange={categoryChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="wash">wash</label>
        <input
          className="form-control"
          type="text"
          name="wash"
          value={category.wash}
          onChange={categoryChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="place">place</label>
        <input
          className="form-control"
          type="text"
          name="place"
          value={category.place}
          onChange={categoryChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="note">note</label>
        <input
          className="form-control"
          type="text"
          name="note"
          value={category.note}
          onChange={categoryChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="story">story</label>
        <input
          className="form-control"
          type="text"
          name="story"
          value={category.story}
          onChange={categoryChange}
          required
        />
      </div>
    </div>
  );
};

export default Category;
