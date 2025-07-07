export type TUser = {
  name: string;
  email: string;
  password: string;
  role: 'User' | 'Admin';
  contactNo: string;
  address?: string;
  isDeleted: boolean;
};

