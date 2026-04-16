import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import profileRoute from './routes/profileRoute.js';
import { errorHandler } from './middleware/errorHandler.js';
import { connectToDb } from './config/db.js';
const app = express();
dotenv.config();
connectToDb();
const PORT = process.env.PORT || 4500;
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(morgan('dev'));
app.get('/', (_req, res) => {
    res.send("I'm up and ready.");
});
app.use('/api', profileRoute);
app.use(errorHandler);
app.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map