import express from "express";
import { Allroutes } from "../controller/routeController.js";
const router = express.Router();
router.get("/", Allroutes.homeroute);
router.get("/reg", Allroutes.regroute);
router.post("/reg", Allroutes.userinfo);
router.get("/login", Allroutes.loginroute);
router.post("/login", Allroutes.verifylogin);
export { router };
