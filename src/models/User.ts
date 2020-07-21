import { IUser } from "../interface/IUser"
import mongoose, {Schema} from "mongoose";

const userShema: Schema = new Schema({
    email: {
        type: String,
        require: "Email address is required",
        // validate: ["Invalid email"],
        unique: true,
      },
      firstName: {
        type: String,
        required: "Fullname is required",
      },
      password: {
        type: String,
        required: "Password is required",
      },
      confirmed: {
        type: Boolean,
        default: false,
      },
      avatar: String,
      confirm_hash: String,
      last_seen: {
        type: Date,
        default: new Date(),
      },
});

const userModel = mongoose.model<IUser>("User", userShema);

export default userModel;