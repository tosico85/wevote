import express from "express";
import logger from "morgan";
import helmet from "helmet";
// import MongoStore from "connect-mongo";
// import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
// import passport from "passport";
import cors from "cors";
import path from "path";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import routes from "./routes";
import { localsMiddleware } from "./middlewares";

const app = express();

app.use(helmet());
//app.set("view engine", "pug");
//app.use("/uploads", express.static("uploads"));
//app.use("/static", express.static("static"));
//app.set("views", path.join(__dirname, "views"));
app.use("/static", express.static(path.join(__dirname, "static")));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger("dev"));
/* app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    store: new CookieStore({
      mongooseConnection: mongoose.connection,
    }),
  })
); 
app.use(passport.initialize());
app.use(passport.session());
*/
app.use(cors());
app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.user, userRouter);

export default app;
