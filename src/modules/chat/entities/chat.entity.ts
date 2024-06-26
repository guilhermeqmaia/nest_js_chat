import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { ChatMessage } from "./chat_message.entity";
import { ChatUser } from "./chat_user.entity";

@Table({
  tableName: "chat",
})
export class Chat extends Model {
  @Column({
    unique: true,
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
  })
  chatId!: string;

  @HasMany(() => ChatUser, {
    foreignKey: "chatId",
    as: "users",
  })
  users: ChatUser[];

  @HasMany(() => ChatMessage, {
    foreignKey: "chatId",
    as: "messages",
  })
  messages: ChatMessage[];
}
