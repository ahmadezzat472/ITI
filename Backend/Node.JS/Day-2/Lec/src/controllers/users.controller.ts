import { Request, Response, NextFunction } from "express";


class UsersController {
    static getAllUsers(req: Request, res: Response, next: NextFunction) {
        console.log(req.body.name)
        return res.status(200).json({ message: "get all users" });
    }

    static getUserById(req: Request, res: Response, next: NextFunction) {
        return res.status(200).json({ message: "get user with id" });
    }

    static createUser(req: Request, res: Response, next: NextFunction) {
        return res.status(201).json({ message: "create a new user" });
    }

    static updateUser(req: Request, res: Response, next: NextFunction) {
        return res.status(200).json({ message: "update user with id" });
    }

    static deleteUser(req: Request, res: Response, next: NextFunction) {
        return res.status(200).json({ message: "delete user with id" });
    }
}

export default UsersController;