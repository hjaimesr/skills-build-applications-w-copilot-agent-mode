// src/index.ts
import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = 8000;
const MONGO_URI = 'mongodb://localhost:27017/octofit';

app.use(express.json());

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Octofit Tracker API running');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
