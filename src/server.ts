import app from './app';
import { prisma } from './lib/prisma';

const PORT = Number(process.env.PORT) || 3333;

async function start() {
  try {
    await prisma.$connect();
    console.log('DB connected');

    app.listen(PORT, '0.0.0.0', () => {
      console.log(`API running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
}

start();