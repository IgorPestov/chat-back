import { IUser } from "../interface/IUser"
import mongoose, { Schema } from "mongoose";
import { differenceInMinutes } from "date-fns"
import { type } from "os";
const userSchema: Schema = new Schema({
  email: {
    type: String,
    require: "Email address is required",
    // validate: ["Invalid email"],
    unique: true,
  },
  fullname: {
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
  contacts: {
    type: Array
  }

});
userSchema.virtual("isOnline").get(function (this: any) {
  return differenceInMinutes(new Date(), this.last_seen) < 5;
});
const userModel = mongoose.model<IUser>("User", userSchema);

export default userModel;