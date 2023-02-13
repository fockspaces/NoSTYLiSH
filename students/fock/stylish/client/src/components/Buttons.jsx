const Buttons = ({ pagelength, page, handlePrev, handleNext, handleSubmit }) => {
  return (
    <div className="d-flex justify-content-between mt-4">
      {page > 0 && (
        <button className="btn btn-primary" onClick={handlePrev}>
          back
        </button>
      )}
      {page < pagelength - 1 && (
        <button className="btn btn-primary" onClick={handleNext}>
          next
        </button>
      )}
      {page === pagelength - 1 && (
        <button className="btn btn-success" onClick={handleSubmit}>
          submit
        </button>
      )}
    </div>
  );
};

export default Buttons;
