import { classifyService } from "../services/classifyService.js";
export const classifyController = async (req, res, next) => {
    try {
        const name = req.query.name;
        const formattedRes = await classifyService(name);
        res.status(200).json(formattedRes);
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=classifyController.js.map