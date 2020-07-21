import {Document } from "mongoose";
import {IUser, IMessage} from './index'
export interface IDialog extends Document {
    partner: IUser | string;
    author: IUser | string;
    messages: IMessage[];
    lastMessage: IMessage | string;
}