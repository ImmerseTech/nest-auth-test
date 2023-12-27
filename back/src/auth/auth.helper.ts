import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthHelper {
  constructor(private readonly jwt: JwtService) {}

  public async generateToken(user: User, expiresIn: string): Promise<string> {
    const payload = { sub: user.id, username: user.username };
    const token = await this.jwt.sign(payload, { expiresIn });
    return token;
  }

  public isPasswordValid(password: string, userPassword: string): boolean {
    return bcrypt.compareSync(password, userPassword);
  }

  public encodePassword(password: string): string {
    const salt: string = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  }
}
