import { Request, Response } from 'express';
import { AuthServices } from './auth.service';

const userLogin = async (req: Request, res: Response) => {
  try {
    const result = await AuthServices.userLogin(req.body);

    res.status(200).json({
      success: true,
      message: 'User loggedin successfully',
      data: result
   });
  } catch (error:any) {
     res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    });
  }


};

export const AuthControllers = {
  userLogin,
};
