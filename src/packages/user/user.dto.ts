import { IsString, IsEmail } from 'class-validator';

export class userLoginDTO {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

export class userRegisterDTO extends userLoginDTO {
  @IsString()
  firstname: string;

  @IsString()
  lastname: string;
}
