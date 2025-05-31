import express from 'express'
import { registerUser, loginUser, getCurrentUser, updateProfile, updatePassword } from '../controllers/userController.js';
import authMiddleware from '../middleware/auth.js'

const userRouter = express.Router();

//public url routes
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

//private url routes - protect using auth
userRouter.get("/me", authMiddleware, getCurrentUser);
userRouter.put("/profile", authMiddleware, updateProfile);
userRouter.put("/password", authMiddleware, updatePassword);

export default userRouter;
