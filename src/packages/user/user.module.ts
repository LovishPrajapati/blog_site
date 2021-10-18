import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserDAL } from './user.dal';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: UserDAL.name,
      useClass: UserDAL,
    },
  ],
})
export class UserModule {}
