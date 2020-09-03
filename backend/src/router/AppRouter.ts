import express from "express";
import { AppController } from "../controller/AppController";
export const appRouter = express.Router();

appRouter.post("/addnewlink", new AppController().newLink);
appRouter.post("/addbatch", new AppController().insertbatch);
appRouter.get("/pendingjobs", new AppController().pendingJobs)
appRouter.delete("/cleantable", new AppController().truncateTable)
appRouter.post("/getall", new AppController().getData)
appRouter.get("/getstatus", new AppController().getStatus)
appRouter.put("/updateqtd", new AppController().updateQtd)


