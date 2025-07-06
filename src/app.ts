import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PhoneRoutes } from './modules/phone/phone.route';
import { UserRouters } from './modules/user/user.route';


const app: Application = express();
dotenv.config();

//parsers
app.use(express.json());
app.use(cors());

app.use("/api/v1/phones", PhoneRoutes);
app.use("/api/v1/users", UserRouters);

app.get('/', (req: Request, res: Response) => {
  res.status(200).send({
    success: true,
    message: 'Just Phones server is running...',
  });
});


export default app;
