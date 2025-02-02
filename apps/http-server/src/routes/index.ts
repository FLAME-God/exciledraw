import express, { Router } from "express";
import userRouter from "./user";
import roomRouter from "./room";
const router: Router = express.Router();

router.use("/auth", userRouter);
router.use("/room", roomRouter)

export default router;