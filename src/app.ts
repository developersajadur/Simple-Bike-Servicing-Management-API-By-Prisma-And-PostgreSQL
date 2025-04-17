import express, { Application, Request, Response } from "express";
import cors from "cors";
import status from "http-status";
import cookieParser from "cookie-parser";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  res.status(status.OK).json({
    success: true,
    message: "Server Is Running",
  });
});


export default app;