import express from 'express';
import { PhoneController } from './phone.controller';

const router = express.Router();

router.get('/', PhoneController.getAllPhones);
router.get('/:id', PhoneController.getSinglePhone);

export const PhoneRoutes = router;
