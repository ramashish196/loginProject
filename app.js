import express from "express";
import { router } from "./routes/router.js";
import { dburl, connectDB } from "./db/db.js";
const app = express();
const port = process.env.port || 3000;
app.use(express.urlencoded({ extended: true }));
app.use("/", router);
app.use(express.static("public"));
app.set("view engine", "ejs");
connectDB(dburl);

app.listen(port, () => {
  console.log(`server lesting at http://localhost:${port}`);
});
