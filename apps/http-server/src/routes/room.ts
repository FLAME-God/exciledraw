import express, {Router} from "express";
import { authUser } from "../middleware/user";
import roomCtlr from "../controller/room";

const route: Router = express.Router();

route.post("/create", authUser, roomCtlr.roomCreate);

export default route