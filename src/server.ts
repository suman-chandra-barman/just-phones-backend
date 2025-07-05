import mongoose from 'mongoose';
import app from './app';

async function runServer() {
  try {
    await mongoose.connect(process.env.DB_URL as string);

    app.listen(process.env.port, () => {
      console.log(`App is listening on port ${process.env.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
runServer();
