import { Document } from 'mongoose'
import { IUser } from './IUser'
import { IMessage } from './IMessage'
export interface IDialog extends Document {
    parther: IUser | string;
    author: IUser | string;
    message: IMessage[];
    lastMessage: IMessage | string;
}
