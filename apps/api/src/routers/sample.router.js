import { Router } from 'express';
import {
  createSampleData,
  getSampleData,
} from '../controllers/sample.controller';

const sampleRouter = Router();

// Middleware
sampleRouter.use((req, res, next) => {
  console.log('Sample Router Middleware');
  next();
});

// GET
sampleRouter.get('/', async (req, res) => {
  const result = await getSampleData();
  res.json(result);
});

// POST
sampleRouter.post('/', async (req, res) => {
  await createSampleData();
  res.send('Create Sample Data');
});

export { sampleRouter };
