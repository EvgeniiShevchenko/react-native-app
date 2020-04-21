import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    surname: {
      type: String,
    },
    bornDate: {
      type: String,
    },
    phone: {
      type: String,
    },
    email: {
      type: Number,
    },
  },
  { collection: 'users' }
);
