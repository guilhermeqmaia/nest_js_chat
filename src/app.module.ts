import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PrivateKeyMiddleware } from "./core/middlewares/private_key.middleware";
import { UserModule } from "./module/user/user_module";

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(PrivateKeyMiddleware).forRoutes("*");
  }
}
