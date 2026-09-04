import mongoose from 'mongoose';
import { Activity, Leaderboard, Team, User, Workout } from '../models.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    await User.insertMany([
      { name: 'Ana Popescu', email: 'ana@example.com', team: 'Trailblazers', points: 420 },
      { name: 'Mihai Ionescu', email: 'mihai@example.com', team: 'Trailblazers', points: 350 },
      { name: 'Elena Marin', email: 'elena@example.com', team: 'Early Risers', points: 290 },
    ]);

    await Team.insertMany([
      { name: 'Trailblazers', captain: 'Ana Popescu', memberCount: 2 },
      { name: 'Early Risers', captain: 'Elena Marin', memberCount: 1 },
    ]);

    await Activity.insertMany([
      { user: 'Ana Popescu', type: 'Running', durationMinutes: 35, points: 180, completedAt: new Date('2026-08-30') },
      { user: 'Mihai Ionescu', type: 'Cycling', durationMinutes: 50, points: 150, completedAt: new Date('2026-08-29') },
      { user: 'Elena Marin', type: 'Yoga', durationMinutes: 30, points: 120, completedAt: new Date('2026-08-28') },
    ]);

    await Leaderboard.insertMany([
      { user: 'Ana Popescu', team: 'Trailblazers', points: 420, rank: 1 },
      { user: 'Mihai Ionescu', team: 'Trailblazers', points: 350, rank: 2 },
      { user: 'Elena Marin', team: 'Early Risers', points: 290, rank: 3 },
    ]);

    await Workout.insertMany([
      { title: 'Full-body starter', level: 'Beginner', durationMinutes: 20, focus: 'Strength' },
      { title: 'Tempo run', level: 'Intermediate', durationMinutes: 30, focus: 'Cardio' },
      { title: 'Mobility reset', level: 'All levels', durationMinutes: 15, focus: 'Flexibility' },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
