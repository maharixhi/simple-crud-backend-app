import mongoose from "mongoose";

export const connectDb = () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    mongoose.connection.on("connected", () => {
      console.log("MongoDB connected");
    });
  } catch (error) {
    console.log(error);
  }
};
