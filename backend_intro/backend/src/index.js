import dotenv from 'dotenv';
import connectDB from './config/database';

dotenv.config({
    path: './.env'
});

const startServer = async () => {
    try {
        await connectDB

        app.on("error", (error) => {
            console.error("Server error", error);
            throw error;

        });

        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });



    } catch (error) {
        console.log("Failed to start server:", error);
        process.exit(1);
    }
}

startServer();