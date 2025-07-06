import { User } from '../user/user.model';
import { TUserLogin } from './auth.interface';
import bcrypt from 'bcryptjs';

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

 const { password, ...withOutPassword } = user.toJSON();
  return withOutPassword;
};

export const AuthServices = {
  userLogin,
};
