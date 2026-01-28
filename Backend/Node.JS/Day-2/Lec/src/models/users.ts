import mongoose from 'mongoose';
import { IUserDocument, Role } from '../types';

const userSchema = new mongoose.Schema<IUserDocument>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
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
        min: 18,
        max: 100,
    },
}, {
    timestamps: true,
});

const User = mongoose.model<IUserDocument>("users", userSchema);

export default User;