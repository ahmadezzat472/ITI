import { Router } from "express";
import UsersController from "../controllers/users.controller";
import validateSchema from "../middlewares/validator";
import {
  createUserSchema,
  getUsersSchema,
  updateUserSchema,
  userIdSchema,
} from "../schemas/users";

const router = Router();

// get all users
router.get("/", validateSchema(getUsersSchema), UsersController.getAllUsers);

// get with id
router.get("/:id", validateSchema(userIdSchema), UsersController.getUserById);

// create a new user
router.post("/", validateSchema(createUserSchema), UsersController.createUser);

// update with id
router.patch(
  "/:id",
  validateSchema(updateUserSchema),
  UsersController.updateUser,
);

// delete with id
router.delete("/:id", validateSchema(userIdSchema), UsersController.deleteUser);

export default router;
