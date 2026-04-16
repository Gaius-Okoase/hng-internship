import { AppError } from "../utils/AppError.js";
import { MongooseError } from "mongoose";
export const errorHandler = (error, _req, res, _next) => {
    if (error instanceof AppError) {
        res.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }
    else if (error instanceof MongooseError) {
        res.status(500).json({
            status: "error",
            message: error.message
        });
    }
    else {
        res.status(500).json({
            status: "error",
            message: error.message
        });
    }
};
//# sourceMappingURL=errorHandler.js.map