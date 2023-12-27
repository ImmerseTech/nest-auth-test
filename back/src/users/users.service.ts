import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(userData: CreateUserDto) {
    const newUser = await this.usersRepository.save(userData);
    return newUser;
  }

  async findOne(username: string) {
    const user = await this.usersRepository.findOne({
      where: { username },
    });
    return user;
  }
}
