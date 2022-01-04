import express from "express";
import bodyParser from "body-parser";
import lusca from "lusca";

// Controllers (route handlers)
import * as homeController from './controller/home/home';

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));

app.get("/", homeController.index);

export default app;