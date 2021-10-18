import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BlogModule } from './packages/blog/blog.module';
import { UserModule } from './packages/user/user.module';

@Module({
  imports: [BlogModule, UserModule],
  controllers: [AppController],
})
export class AppModule {}
