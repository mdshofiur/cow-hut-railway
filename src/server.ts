import mongoose from 'mongoose';
import { Server } from 'http';
import app from './app';

let server: Server;

async function run() {
  try {
    await mongoose.connect(process.env.DB_URL as string);
    console.log(`Database is connected successfully`);

    server = app.listen(2000, () => {
      console.log(`Application  listening on port 2000`);
    });
  } catch (err) {
    console.log('Failed to connect database', err);
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

run();