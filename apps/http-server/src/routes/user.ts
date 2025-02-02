import express, { Router } from "express";
import userCtlr from "../controller/user"

const router: Router = express.Router();

router.post("/signin", userCtlr.signin);
router.post("/signup", userCtlr.signup);

export default router