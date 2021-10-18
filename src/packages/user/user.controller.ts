import { Body, Controller, Post } from '@nestjs/common';
import { userLoginResponse } from 'src/responses/userResponse';
import { userLoginDTO, userRegisterDTO } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  login(@Body() body: userLoginDTO): Promise<userLoginResponse> {
    return this.userService.login(body);
  }

  @Post('register')
  register(@Body() body: userRegisterDTO): Promise<userLoginResponse> {
    return this.userService.register(body);
  }
}
