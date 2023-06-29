import fs from 'fs';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import thumbsupply from 'thumbsupply';

import data from './seed_test_data.json' assert {type: 'json'};

import { Video } from '../model/Video.js'

dotenv.config({ path: new URL('../../.env', import.meta.url).pathanme });

mongoose.connect(process.env.DB_TEST)

// GridFSBucket provides methods for working with files stored in the bucket
// creating this bucket allows to perfom tasks as retrieving, updating etc. in the MongoDB using GridFS storage system
// mongoose.connect represents the active MongoDB connection managed by mongoose 
let gridFSBucket = new mongoose.mongo.GridFSBucket(mongoose.connection, {
    bucketName: 'videobucket'
});

console.log('Connected to MongoDB');

for await (let videoData of data.videos) {

    // upload videofile to mongoDB using gridFS - filepath and filename are given by seed_test_data.json
    // pipe offers reading from source and uploading to destination simultaneously
    await fs.createReadStream(videoData.filepath).pipe(gridFSBucket.openUploadStream(videoData.filename));

    // stat gets the statistical info about the file (e.g. filesize, creationtime, etc.)
    const stat = await fs.statSync(videoData.filepath);

    //generating a thumbnail filename
    let thumbnail = videoData.filename.replace('mp4', 'png');
    // generating a thumbnail image at the specified path
    // handle the result of generating the thumbnail which is stored in a cachepath
    // creates a read stream and pipes it to a gridFSBucket in MongoDB
    await thumbsupply.generateThumbnail(videoData.filepath)
        .then((cachePath) => {
            fs.createReadStream(cachePath).pipe(gridFSBucket.openUploadStream(thumbnail));
        });

    let video = new Video({
        title: videoData.title,
        level: videoData.level,
        category: videoData.category,
        filename: videoData.filename,
        filesize: stat.size,
        thumbnail: thumbnail
    });

    await video.save();

    mongoose.disconnect();
}