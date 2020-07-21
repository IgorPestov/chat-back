import {Document } from "mongoose";

export interface IUser extends Document {
    email: string;
    firstName: string;
    password: string;
    confirmed: boolean;
    avatar: string;
    confirm_hash: string;
    last_seen: Date;
    data?: IUser;
  }