import { Request, Response } from 'express';
import { AuthServices } from './auth.service';

const userLogin = async (req: Request, res: Response) => {
  try {
    const result = await AuthServices.userLogin(req.body);

    res.cookie('refreshToken', result.refreshToken, {
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
    });

    res.status(200).json({
      success: true,
      message: 'User loggedin successfully',
      data: {
      accessToken: result.accessToken,
    },
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
