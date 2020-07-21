import mongoose, {Schema} from "mongoose";
import {IDialog} from '../interface/index'
const DialogSchema = new Schema(
    {
      partner: { type: Schema.Types.ObjectId, ref: "User" },
      author: { type: Schema.Types.ObjectId, ref: "User" },
      lastMessage: { type: Schema.Types.ObjectId, ref: "Message" },
    },
    {
      timestamps: true,
    }
  );
  
  const DialogModel = mongoose.model<IDialog>("Dialog", DialogSchema);
  
  export default DialogModel;
  