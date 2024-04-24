import {
  Controller,
  Get,
  Post,
  Req,
  Res,
  UnprocessableEntityException,
} from "@nestjs/common";
import { Request, Response } from "express";
import { isValidUser } from "./user_model";
import { UserService } from "./user_service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("/signup")
  signUp(@Req() req: Request, @Res() res: Response) {
    const body = req.body;
    if (!isValidUser(body)) {
      throw new UnprocessableEntityException("User data is not valid");
    }
    const userId = this.userService.signUp(body);
    res.status(201).send({ userId: userId });
  }

  @Get("/list")
  list(@Res() res: Response) {
    const list = this.userService.list();
    res.status(200).send(list);
  }
}
