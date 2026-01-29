import { z } from "zod";
import { RequestSchema } from "../types/RequestSchema";

export const getUsersSchema = {
  query: z.object({
    page: z.string().optional(),
    limit: z.string().optional(),
  }),
};

// schemas/users.ts
export const userIdSchema = {
  params: z.object({
    id: z.string().min(1),
  }),
};

export const createUserSchema: RequestSchema = {
  body: z
    .object({
      name: z.string().min(3),
      password: z
        .string()
        .min(8, "Password must be at least 8 characters long"),
      email: z.string().email("Invalid email address"),
      repeatPassword: z
        .string()
        .min(8, "Password must be at least 8 characters long"),
      age: z.number().min(18).max(100),
    })
    .refine((data) => data.password === data.repeatPassword, {
      path: ["repeatPassword"],
      message: "Passwords do not match",
    }),
};

export const updateUserSchema: RequestSchema = {
  params: z.object({
    id: z.string().min(1),
  }),
  body: z.object({
    name: z.string().min(3).optional(),
    email: z.string().email().optional(),
    age: z.number().min(18).max(100).optional(),
  }),
};
