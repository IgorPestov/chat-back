import mongoose, {Schema} from 'mongoose'
import { IDialog } from '../interface/IDialog';

const dialogSchema = new Schema (
    {
        partner: {type: Schema.Types.ObjectId, ref:"User"},
        author: {type:Schema.Types.ObjectId, ref: "User"},
        lastMessage:{type: Schema.Types.ObjectId, ref:"Message"}
    },
    {
        timestamps:true,
    }
);
const dialogModel = mongoose.model<IDialog>("Dialog", dialogSchema)
export default dialogModel;