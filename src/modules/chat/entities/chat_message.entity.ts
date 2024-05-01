import {
  BelongsTo,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "src/modules/user/entities/user.entity";
import { Chat } from "./chat.entity";

@Table({
  tableName: "chat_message",
})
export class ChatMessage extends Model {
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

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  message: string;
}
