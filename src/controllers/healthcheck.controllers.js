import  { ApiResponse } from "../utils/api-response.js"

const healthCheck = (req, res) => {
    try {
        res
            .status(200)
            .json(new ApiResponse(200, {message: "Server is running..."}))
    } catch(error){}
}

const testRoute = (req, res) => {
    res
        .status(200)
        .json(new ApiResponse(200, {message: "test route is working..."}))
}
export {testRoute}
export { healthCheck }