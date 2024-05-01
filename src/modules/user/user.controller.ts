import { Controller, Get, Post, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("/signup")
  async signUp(@Req() req: Request, @Res() res: Response) {
    const body = req.body;
    const userId = await this.userService.create(body);
    res.status(201).send({ userId: userId });
  }

  @Get("/list")
  async list(@Res() res: Response) {
    const list = await this.userService.findAll();
    res.status(200).send(list);
  }
}
