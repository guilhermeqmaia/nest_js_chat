import { Chat } from "src/modules/chat/entities/chat.entity";
import { ChatMessage } from "src/modules/chat/entities/chat_message.entity";
import { ChatUser } from "src/modules/chat/entities/chat_user.entity";
import { User } from "src/modules/user/entities/user.entity";

export const Models = [User, Chat, ChatUser, ChatMessage];
