import { Module } from "@nestjs/common";
import { UserController } from "./user_controller";
import { UserService } from "./user_service";

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
