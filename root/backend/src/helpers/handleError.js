const handleError = (error, status) => {
  return new Error({ status: 'FAILED', code: status, message: error.message || error });
};

module.exports = handleError;
