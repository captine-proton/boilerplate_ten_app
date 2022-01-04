import { Request, Response } from "express";
import logger from '../../utils/logger'

/**
 * Home page.
 * @route GET /
 */
export const index = (req: Request, res: Response) => {
    logger.info('Home route called')
    res.render("home", {
        title: "Home"
    });
};