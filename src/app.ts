import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';


const app: Application = express();
dotenv.config();

//parsers
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.status(200).send({
    success: true,
    message: 'Just Phones server is running...',
  });
});


export default app;
