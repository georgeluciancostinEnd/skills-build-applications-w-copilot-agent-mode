import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  team: { type: String, required: true },
  points: { type: Number, required: true, default: 0 },
});

const teamSchema = new Schema({
  name: { type: String, required: true, unique: true },
  captain: { type: String, required: true },
  memberCount: { type: Number, required: true },
});

const activitySchema = new Schema({
  user: { type: String, required: true },
  type: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  points: { type: Number, required: true },
  completedAt: { type: Date, required: true },
});

const leaderboardSchema = new Schema({
  user: { type: String, required: true },
  team: { type: String, required: true },
  points: { type: Number, required: true },
  rank: { type: Number, required: true },
});

const workoutSchema = new Schema({
  title: { type: String, required: true },
  level: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  focus: { type: String, required: true },
});

export const User = mongoose.models.User || mongoose.model('User', userSchema);
export const Team = mongoose.models.Team || mongoose.model('Team', teamSchema);
export const Activity = mongoose.models.Activity || mongoose.model('Activity', activitySchema);
export const Leaderboard = mongoose.models.Leaderboard || mongoose.model('Leaderboard', leaderboardSchema);
export const Workout = mongoose.models.Workout || mongoose.model('Workout', workoutSchema);