import { Document } from 'mongoose';

export enum Role {
    ADMIN = 'admin',
    USER = 'user',
}

export interface IUser {
    name: string;
    email: string;
    password: string;
    role: Role;
    age: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IUserDocument extends IUser, Document { }