import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rujit33:rujit33@rujit.tnqdp2j.mongodb.net/rujit?retryWrites=true&w=majority&appName=rujit "
    );

    console.log("DB connection established...");
  } catch (error) {
    console.log("DB connection failed");
    console.log(error.message);
  }
};

export default connectDB;
