import { Injectable } from "@nestjs/common";
import { User } from "./user_model";

@Injectable()
export class UserService {
  private users: User[] = [];

  signUp(user: User): number {
    this.users.push({ ...user, id: this.users.length + 1 });
    return this.users.length;
  }

  list(): User[] {
    return this.users;
  }
}
