import type { ErrorRequestHandler } from "express";
import { AppError } from "../utils/AppError.js";
import { MongooseError } from "mongoose";
import { ZodError } from "zod";

export const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
    if (error instanceof AppError) {
        res.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    } else if (error instanceof MongooseError) {
        res.status(500).json({
            status: "error",
            message: error.message
        })
    } else if (error instanceof ZodError) {
        res.status(422).json({
            status: "error",
            message: "Invalid query parameter"
        })
    }
    else {
        res.status(500).json({
            status: "error",
            message: error.message
        })
    }
}