import { Controller, Get, Post, Req, UnprocessableEntityException } from "@nestjs/common";
import { User, isValidUser } from "./user_model";
import { UserService } from "./user_service";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('/signup')
    signUp(@Req() req: Request): number {
        const body = req.body;
        if (!isValidUser(body)) {
            throw new UnprocessableEntityException('User data is not valid');
        }
        return this.userService.signUp(body);
    }

    @Get('/list')
    list(): User[] {
        return this.userService.list();
    }
}