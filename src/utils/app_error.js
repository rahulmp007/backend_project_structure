class AppError {
  constructor(message, statuscode) {
    super(message);
    this.message = message;
    this.statuscode = statuscode;
    Error.captureStackTrace(this, this.constructor);
  }
}
