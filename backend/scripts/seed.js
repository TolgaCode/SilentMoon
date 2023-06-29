import fs from 'fs';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import thumbsupply from 'thumbsupply';

import data from './seed_test_data.json' assert {type: 'json'};

dotenv.config({ path: new URL('../../.env', import.meta.url).pathanme });

mongoose.connect(process.env.DB_TEST)

// GridFSBucket provides methods for working with files stored in the bucket
// creating this bucket allows to perfom tasks as retrieving, updating etc. in the MongoDB using GridFS storage system
// mongoose.connect represents the active MongoDB connection managed by mongoose 
let gridFSBucket = new mongoose.mongo.GridFSBucket(mongoose.connection, {
    bucketName: 'videobucket'
});

console.log('Connected to MongoDB');

