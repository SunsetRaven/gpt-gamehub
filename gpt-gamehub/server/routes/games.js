const express = require('express');
const multer = require('multer');
const Game = require('../models/Game');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('gameFile'), async (req, res) => {
  const { title, description, createdBy } = req.body;
  const fileUrl = `/uploads/${req.file.filename}`;

  const newGame = new Game({ title, description, fileUrl, createdBy });
  await newGame.save();

  res.json({ success: true, game: newGame });
});

router.get('/', async (req, res) => {
  const games = await Game.find().sort({ createdAt: -1 });
  res.json(games);
});

module.exports = router;
