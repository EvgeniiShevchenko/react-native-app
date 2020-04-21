import { Module } from '@nestjs/common';

// MongoDB
import { DatabaseModule } from './database/database.module';

// Modules
import {UsersModule} from "./routes/users/users.module";

import { MongoProviders } from './database/DataBaseProviders';
// api/users
import {UsersController} from './routes/users/users.controller';
import {UsersService} from './routes/users/users.service';


@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService, ...MongoProviders],
  exports: []
})

export class AppModule {}