import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);

import { v7 as uuidv7 } from 'uuid';
import dotenv from 'dotenv';
import seeds from './seed_profiles.json' with { type: 'json' };
import mongoose from 'mongoose';
import { Profile } from '../models/Profile.js';

dotenv.config();

// Extract profile array from seed json
const seedsArr = seeds.profiles;

// Add id and created_at fields to each seed object
const completeSeedArr = seedsArr.map((seed) => ({
  created_at: new Date().toISOString(),
  ...seed,
  id: uuidv7(),
}));

const seedDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error(`Database URI not set`);
    }
    await mongoose.connect(mongoUri);
    console.log('Successfully connected to DB');

    await Profile.deleteMany({});
    console.log(`DB cleared successfully`);

    await Profile.insertMany(completeSeedArr);
    console.log(`DB seeded successfully`);

    await mongoose.connection.close();
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
  }
};

seedDB();
