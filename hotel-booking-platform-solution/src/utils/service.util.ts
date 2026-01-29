interface ServiceSuccess<T> {
  data: T;
  statusCode: number;
}

function serviceSuccess<T>(data: T, statusCode: number): ServiceSuccess<T> {
  return {
    data: data,
    statusCode: statusCode,
  };
}

export { serviceSuccess, type ServiceSuccess };
