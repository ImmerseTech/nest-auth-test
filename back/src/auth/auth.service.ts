import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from 'src/users/entities/user.entity';
import { AuthHelper } from './auth.helper';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private helper: AuthHelper,
  ) {}

  async register(body) {
    const { username, name, password } = body;
    let user = await this.usersService.findOne(username);
    if (user)
      return { status: 'Error', message: 'This user is already exists' };

    user = new User();
    user.name = name;
    user.username = username;
    user.password = await this.helper.encodePassword(password);

    const savedUser = await this.usersService.create(user);
    const newUser = Object.assign({}, savedUser);
    delete newUser.password;

    return newUser;
  }

  async login(username, password) {
    const user = await this.usersService.findOne(username);
    if (!user) return { status: 'Error', message: 'User not found' };

    const isPasswordValid: boolean = this.helper.isPasswordValid(
      password,
      user.password,
    );

    if (!isPasswordValid)
      return { status: 'Error', message: 'This password is invalid' };

    const token = await this.helper.generateToken(user, '21d');
    return { user, token };
  }
}
