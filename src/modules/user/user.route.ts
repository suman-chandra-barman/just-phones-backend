import { Router } from 'express';
import { UserControllers } from './user.controller';
const router = Router();

router.post(
  '/register',
  UserControllers.createUser,
);

router.get(
  '/me',
  UserControllers.getMe,
);

export const UserRouters = router;
