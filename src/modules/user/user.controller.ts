import { Request, Response } from 'express';
import { UserServices } from './user.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const result = await UserServices.createUserIntoDB(user);

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    });
    
  }
};


const getMe = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const result = await UserServices.getMeFromDB(email);

  res.status(200).json({
    success: true,
    message: 'User retrieved successfully',
    data: result,
  });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    });
    
  }
};

export const UserControllers = {
  createUser,
  getMe,
};
