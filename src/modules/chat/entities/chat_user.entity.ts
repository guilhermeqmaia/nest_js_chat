import { BelongsTo, Model, Table } from "sequelize-typescript";
import { User } from "src/modules/user/entities/user.entity";
import { Chat } from "./chat.entity";

@Table({
  tableName: "chat_user",
})
export class ChatUser extends Model {
  @BelongsTo(() => User, {
    foreignKey: "userId",
    as: "user",
  })
  user: User;

  @BelongsTo(() => Chat, {
    foreignKey: "chatId",
    as: "chat",
  })
  chat: Chat;
}
