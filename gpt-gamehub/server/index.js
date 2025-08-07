const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const gamesRouter = require('./routes/games');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/api/games', gamesRouter);

mongoose.connect('mongodb://localhost:27017/gptgamehub');
app.listen(5000, () => console.log('Server running on port 5000'));
