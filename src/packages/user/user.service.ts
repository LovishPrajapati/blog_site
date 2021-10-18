import { Inject, Injectable } from '@nestjs/common';
import { userLoginResponse } from 'src/responses/userResponse';
import { UserDAL } from './user.dal';
import { userLoginDTO, userRegisterDTO } from './user.dto';

@Injectable()
export class UserService {
  constructor(@Inject('UserDAL') private userDal: UserDAL) {}

  async login(body: userLoginDTO): Promise<userLoginResponse> {
    const user = await this.userDal.getUserByEmail(body.email);
    if (!user) {
      return { success: false, message: 'No such user exists' };
    }
    if (user.authenticate(body.password)) {
      return { success: true, message: 'login Success', token: 'token' };
    }
  }

  async register(body: userRegisterDTO): Promise<userLoginResponse> {
    try {
      let user = await this.userDal.getUserByEmail(body.email);
      if (user) {
        return { success: false, message: 'User already exists' };
      }

      user = await this.userDal.createUser(body);

      if (user) {
        return {
          success: true,
          message: 'register success',
          token: 'token here',
        };
      }
    } catch (error) {
      console.log(error);
    }
  }
}
