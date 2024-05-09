import mongoose from "mongoose";
const dburl = process.env.dburl || "mongodb://localhost:27017";
const connectDB = async (dburl) => {
  try {
    const option = { dbName: "studentdb" };
    await mongoose.connect(dburl, option);
    console.log("db connected successfully");
  } catch (err) {
    console.log(err);
  }
};
export { dburl, connectDB };
