import { NextFunction, Request, Response } from "express";
import APIError from "../utils/APIError";
import { RequestSchema } from "../types/RequestSchema";

const keys: (keyof RequestSchema)[] = ["body", "params", "query"];

const validateSchema = (schema: RequestSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    for (const key of keys) {
      const zodSchema = schema[key];
      if (!zodSchema) continue;

      const result = zodSchema.safeParse(req[key]);

      if (!result.success) {
        throw new APIError(result.error.issues[0].message, 400);
      }

      // overwrite with validated data
      (req as any)[key] = result.data;
    }

    next();
  };
};

export default validateSchema;
