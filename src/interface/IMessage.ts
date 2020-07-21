import {Document } from "mongoose";
import {IDialog} from './index'
export interface IMessage extends Document {
    text: string;
    dialog: IDialog | string;
    read: boolean;
  }