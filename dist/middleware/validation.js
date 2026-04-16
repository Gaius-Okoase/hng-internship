import { AppError } from "../utils/AppError.js";
export const validateQuery = (req, _res, next) => {
    const { name } = req.body;
    // Verify name is present
    if (name == null || name.length === 0) {
        throw new AppError(400, "Bad Request");
    }
    // Verify name is not an array.
    if (Array.isArray(name) || !isNaN(Number(name))) {
        throw new AppError(422, "Unprocessible entity");
    }
    return next();
};
//# sourceMappingURL=validation.js.map