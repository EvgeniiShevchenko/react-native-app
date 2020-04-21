import { Module } from '@nestjs/common';

// api/users
import {UsersController} from './users.controller';
import {UsersService} from './users.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService]
})

export class UsersModule {}