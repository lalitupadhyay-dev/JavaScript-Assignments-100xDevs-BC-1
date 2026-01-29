import type { Response } from "express";
interface Result {
    success: boolean;
    data: [] | {} | null;
    error: string | null;
    statusCode: number;
}
declare function sendApiResponse(response: Response, result: Result): Response<any, Record<string, any>>;
export default sendApiResponse;
//# sourceMappingURL=sendApiResponse.util.d.ts.map