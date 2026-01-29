declare class ServiceResult {
    success: boolean;
    data: [] | {} | null;
    error: string | null;
    statusCode: number;
    constructor(success: boolean, data: [] | {} | null, error: string | null, statusCode: number);
    static success(data: [] | {} | null, statusCode: number): ServiceResult;
    static failure(error: string, statusCode: number): void;
}
export default ServiceResult;
//# sourceMappingURL=ServiceResult.d.ts.map