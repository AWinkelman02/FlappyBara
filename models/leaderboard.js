const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LeaderboardSchema = new Schema({
  name: { type: String, required: true },
  score: { type: String, required: true },
});

// Export model
module.exports = mongoose.model("Leaderboard", LeaderboardSchema);