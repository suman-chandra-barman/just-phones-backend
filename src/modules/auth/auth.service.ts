import { User } from '../user/user.model';
import { TUserLogin } from './auth.interface';
import bcrypt from 'bcryptjs';
import { createToken } from './auth.utils';
import jwt from 'jsonwebtoken';

const userLogin = async (payload: TUserLogin) => {
  const user = await User.findOne({
    email: payload.email,
    isDeleted: false,
  }).select('+password');

  //if user not found
  if (!user) {
    throw new Error('Invalid Email');
  }

  //check password is valid
  const isCorrectPassword: boolean = await bcrypt.compare(
    payload.password,
    user.password,
  );
  if (!isCorrectPassword) {
    throw new Error('Wrong password!');
  }

 
  //create access token and refresh token
  const jwtPayload = {
    userId: user._id,
    email: user.email,
    role: user.role,
  };

const accessToken = createToken(
  jwtPayload,
  process.env.JWT_ACCESS_SECRET as string,
  (process.env.JWT_ACCESS_EXPIRES ?? '1h') as jwt.SignOptions['expiresIn']
);

const refreshToken = createToken(
  jwtPayload,
  process.env.JWT_REFRESH_SECRET as string,
  (process.env.JWT_REFRESH_EXPIRES ?? '7d') as jwt.SignOptions['expiresIn']
);

  return {
    accessToken,
    refreshToken,
  };
};

export const AuthServices = {
  userLogin,
};
