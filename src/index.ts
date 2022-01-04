import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import dotenv from "dotenv";

import errorHandler from "errorHandler";
import app from './app';

dotenv.config();

/**
 * Error Handler. Provides full stack
 */
if (process.env.NODE_ENV === "development") {
    app.use(errorHandler());
}

/**
 * Start Express server.
 */
const server = app.listen(app.get("port"), () => {
    console.log(
        " ⚡ App is running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    );
    console.log("  Press CTRL-C to stop\n");
});

export default server;