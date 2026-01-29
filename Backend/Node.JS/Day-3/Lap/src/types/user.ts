import { Document } from "mongoose";
import { Role } from "../enums/role.enum";

export interface User {
  name: string;
  email: string;
  password: string;
  role: Role;
  age: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserDocument extends User, Document {}
