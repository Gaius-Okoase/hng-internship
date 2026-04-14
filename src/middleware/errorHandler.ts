import type { ErrorRequestHandler } from "express";
import { AppError } from "../utils/AppError.js";

export const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
    if (error instanceof AppError) {
        res.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    } else {
        res.status(500).json({
            status: "error",
            message: error.message
        })
    }
}