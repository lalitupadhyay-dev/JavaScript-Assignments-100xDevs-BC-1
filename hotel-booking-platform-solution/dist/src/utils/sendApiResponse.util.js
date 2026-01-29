import ApiResponse from "./class/ApiResponse.util.js";
function sendApiResponse(response, result) {
    return response
        .status(result.statusCode)
        .json(new ApiResponse(result.success, result.data, result.error));
}
export default sendApiResponse;
//# sourceMappingURL=sendApiResponse.util.js.map