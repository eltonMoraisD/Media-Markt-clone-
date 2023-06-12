import mongoose from "mongoose";

export async function connectDb() {
  const conn = await mongoose
    .connect(process.env.MONGODB_URL as string)
    .catch((err) => console.log(err));
  console.log("Mongoose Connection Established");

  return conn;
}

async function disconectDb() {
  if (process.env.NODE_ENV === "production") {
    await mongoose.disconnect();
  } else {
    console.log("not disconnected from the database.");
  }
}

const db = { connectDb, disconectDb };

export default db;
