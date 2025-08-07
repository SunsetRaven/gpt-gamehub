const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  title: String,
  description: String,
  fileUrl: String,
  createdBy: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Game', gameSchema);
