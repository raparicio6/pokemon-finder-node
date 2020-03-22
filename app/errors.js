const internalError = (message, internalCode) => ({
  message,
  internalCode
});

exports.DEFAULT_ERROR = 'default_error';
exports.defaultError = message => internalError(message, exports.DEFAULT_ERROR);

exports.externalApiError = (error, origin = 'External Api') => ({
  message: error.message || error.error,
  statusCode: error.statusCode || 500,
  origin: error.origin || origin
});
