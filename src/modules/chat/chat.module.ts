import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Models } from "src/db/models.db";
import { ChatController } from "./chat.controller";
import { ChatService } from "./chat.service";

@Module({
  imports: [SequelizeModule.forFeature(Models)],
  controllers: [ChatController],
  providers: [ChatService],
})
export class ChatModule {}
