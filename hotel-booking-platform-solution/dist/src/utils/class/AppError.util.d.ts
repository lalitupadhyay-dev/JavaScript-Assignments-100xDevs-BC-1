export interface AppErrorInstance {
    error: string;
    statusCode: number;
}
declare class AppError extends Error {
    statusCode: number;
    error: string;
    constructor(error: string, statusCode: number);
}
export default AppError;
//# sourceMappingURL=AppError.util.d.ts.map