import mongoose from "mongoose";
const userschema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: Number },
});

const usermodel = mongoose.model("userinfo", userschema);

export default usermodel;
