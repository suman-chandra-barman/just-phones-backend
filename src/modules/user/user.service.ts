import { TUser } from './user.interface';
import { User } from './user.model';
import bcrypt from 'bcryptjs';

const createUserIntoDB = async (payload: TUser) => {
  //check email is exists
  const isExistEmail = await User.findOne({
    email: payload.email,
  });
  if (isExistEmail) {
    throw new Error('This Email is already exists!');
  }

  //hash password
  const hashPassword = await bcrypt.hash(
    payload.password,
    Number(process.env.BCRYPT_SALT_ROUNDS),
  );
  if (hashPassword) {
    payload.password = hashPassword;
  }
  //create user
  const result = await User.create(payload);
  
  const { password, ...withOutPassword } = result.toJSON();
  return withOutPassword;
};

const getMeFromDB = async (email: string) => {
  const result = await User.findOne({ email });
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getMeFromDB,
};
