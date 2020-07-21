import {Document } from "mongoose";
import {IMessage, IUser} from './index'
export interface IUploadFile extends Document {
    filename: string;
    size: number;
    ext: string;
    url: string;
    message: IMessage | string;
    user: IUser | string;
  }