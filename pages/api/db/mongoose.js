import mongoose from "mongoose";

async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  console.log(
    "{Print mongoDB url ======>>>",
    process.env.NEXT_PUBLIC_MONGODB_URL
  );
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

export default dbConnect;
