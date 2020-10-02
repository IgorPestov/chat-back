import {Document } from "mongoose";
import { IDialog } from "./IDialog";

export interface IMessage extends Document {
    text: string;
    dialog: IDialog | string;
    read:boolean;
}
