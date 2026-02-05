import express from 'express';

const app = express();

app.use(express.json());

app.use((req, _res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

app.get('/api/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/', (_req, res) => {
  res.json({
    name: 'Schedule API',
    status: 'running',
  });
});



export default app;
