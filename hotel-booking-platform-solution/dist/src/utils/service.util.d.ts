interface ServiceSuccess<T> {
    data: T;
    statusCode: number;
}
declare function serviceSuccess<T>(data: T, statusCode: number): ServiceSuccess<T>;
export { serviceSuccess, type ServiceSuccess };
//# sourceMappingURL=service.util.d.ts.map