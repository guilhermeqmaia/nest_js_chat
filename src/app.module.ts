import { Module } from '@nestjs/common';
import { UserModule } from './module/user/user_module';

@Module({
  imports: [UserModule],
})
export class AppModule { }
