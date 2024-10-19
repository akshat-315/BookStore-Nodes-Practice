const { stack } = require("../routers/UserRouter");

const errorMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  console.log("Error: ", err);

  const errorResponse = {
    success: false,
    message: err.message || "An unexpected error occurred",
    stack: err.stack,
  };

  res.status(statusCode).json(errorResponse);
};

module.exports = { errorMiddleware };
