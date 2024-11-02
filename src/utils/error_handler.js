function errorHandler(err, req, res, next) {
  console.log("in the global error handling block");
  console.log(`error => ${err.message} ${err.name}`);
  res.json({ message: err.message });
}

module.exports = errorHandler;
