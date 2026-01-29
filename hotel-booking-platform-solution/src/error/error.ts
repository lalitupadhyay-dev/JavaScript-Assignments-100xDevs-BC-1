const error = {
  INVALID_REQUEST: {
    message: "INVALID_REQUEST",
    code: 400,
  },
  INVALID_CREDENTIALS: {
    message: "INVALID_CREDENTIALS",
    code: 401,
  },
  EMAIL_ALREADY_EXISTS: {
    message: "EMAIL_ALREADY_EXISTS",
    code: 409,
  },
  INTERNAL_SERVER_ERROR: {
    message: "INTERNAL_SERVER_ERROR",
    code: 500,
  },
  UNAUTHORIZED: {
    message: "UNAUTHORIZED",
    code: 401,
  },
  FORBIDDEN: {
    message: "FORBIDDEN",
    code: 403
  }
};

export default error;
