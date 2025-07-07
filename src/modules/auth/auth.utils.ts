import jwt, { Secret, SignOptions } from 'jsonwebtoken';

export const createToken = (
  jwtPayload: { email: string; role: string },
  secret: string,
  expiresIn: SignOptions['expiresIn']
) => {
  const jwtSecret: Secret = secret;
  const options: SignOptions = {
    expiresIn,
  };

  return jwt.sign(jwtPayload, jwtSecret, options);
};

export const verifyToken = (token: string, secret: string) => {
  const jwtSecret: Secret = secret;
  return jwt.verify(token, jwtSecret);
};
