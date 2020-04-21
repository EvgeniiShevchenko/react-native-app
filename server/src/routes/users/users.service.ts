import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { UsersDto } from './dto/users.dto';
import { Users } from './interfaces/users.interface';

@Injectable()
export class UsersService {
  constructor(@Inject('USER_MODEL') private readonly usersModel: Model<Users>) {}

  async create(createUserDto: UsersDto): Promise<Users> {
    const createdUser = new this.usersModel(createUserDto);

    return await createdUser.save();
  }

  async getUsers(): Promise<Users[]> {
    return await this.usersModel.find().exec();
  }
}