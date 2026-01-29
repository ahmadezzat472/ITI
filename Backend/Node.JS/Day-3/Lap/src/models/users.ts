import mongoose from "mongoose";
import { UserDocument } from "../types/user";
import { Role } from "../enums/role.enum";

const userSchema = new mongoose.Schema<UserDocument>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: Role,
      default: Role.USER,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.index({ email: 1 }, { unique: true });

const User = mongoose.model<UserDocument>("users", userSchema);

export default User;
