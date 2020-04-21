import { Document } from 'mongoose';

export interface Users extends Document {
    readonly name: string;
    readonly surname: string;
    readonly bornDate: string;
    readonly phone: string;
    readonly email: string;
}