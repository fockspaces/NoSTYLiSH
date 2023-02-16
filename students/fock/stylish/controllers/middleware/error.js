const errorHandler = (err, req, res, next) => {
  // Log the error to the console
  console.error(err);

  // Send an error response to the client
  res.status(500).json({ error: "An unexpected error occurred" });
};

const notFoundHandler = (req, res, next) => {
  res.status(404).send({ err: "The requested resource could not be found" });
};



module.exports = {
  errorHandler,
  notFoundHandler,
};
