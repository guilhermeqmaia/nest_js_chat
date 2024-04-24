import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class PrivateKeyMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.headers["private-key"] !== process.env.PRIVATE_KEY) {
      res.status(401).send("Unauthorized");
      return;
    }
    next();
  }
}
