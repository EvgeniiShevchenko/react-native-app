import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersDto } from './dto/users.dto';
import { UsersService } from './users.service';
import { Users } from './interfaces/users.interface';


@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  async findAll(): Promise<Users[]> {
    return this.usersService.getUsers();
  }

  @Post()
  async create(@Body() usersDto: UsersDto) {
    this.usersService.create(usersDto);
  }
}