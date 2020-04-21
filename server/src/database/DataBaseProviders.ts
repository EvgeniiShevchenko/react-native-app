import { Connection } from 'mongoose';
import { userSchema } from '../models/users.schema';

export const MongoProviders = [
  {
    provide: 'USER_MODEL',
    useFactory: (connection: Connection) => connection.model('users', userSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];