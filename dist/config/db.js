import dns from "dns";
dns.setServers(['8.8.8.8', '8.8.4.4']);
import mongoose, { MongooseError } from "mongoose";
export const connectToDb = async () => {
    try {
        const mongoUri = process.env.MONGO_URI;
        if (!mongoUri) {
            throw new MongooseError(`Database URI not set`);
        }
        await mongoose.connect(mongoUri);
        console.log("Successfully connected to DB");
        return mongoose.connection;
    }
    catch (error) {
        console.error(error instanceof MongooseError ? error.message : 'Failed to connect to DB');
        throw new MongooseError(`Failed to connect to Database`);
        process.exit(1);
    }
};
//# sourceMappingURL=db.js.map