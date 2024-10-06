import mongoose from "mongoose";


const uri  = process.env.MY_DB;

if (!uri) {
    throw new Error("MongoDB URI is not defined in the environment variables");
  }

async function connectDB() {
    try {
        if (mongoose.connection.readyState >= 1) {
            // If already connected, no need to connect again
            return;
          }
      await mongoose.connect(uri!); 
      console.log("Connected to MongoDB successfully!");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    
    }
  }
  
export default connectDB;