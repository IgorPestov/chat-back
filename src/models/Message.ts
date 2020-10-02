import mongoose, { Schema } from 'mongoose'
import { IMessage } from '../interface/IMessage';

const messageSchema = new Schema(
    {
        text: { type: String, require: Boolean },
        dialog: { type: Schema.Types.ObjectId, ref: "Dialog", require: true },
        user: { type: Schema.Types.ObjectId, ref: "User", require: true },
        read: {
            type: Boolean, default: false
        }, 
        attachments: [{type:Schema.Types.ObjectId, ref: "UploadFile"}],
    },
    {
        timestamps:true,
        usePushEach:true,
    }
);
const messageModel = mongoose.model<IMessage>("Message", messageSchema)
export default messageModel;