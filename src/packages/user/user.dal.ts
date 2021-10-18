import { UserModel, UserSchema } from 'src/entity/User/user.entity';

export class UserDAL {
  constructor(private readonly Model: typeof UserModel) {}

  async getUserByEmail(email): Promise<UserSchema> {
    return await this.Model.findOne({ email });
  }

  async createUser(body): Promise<UserSchema> {
    const user = new this.Model(...body);
    return user;
  }
}
