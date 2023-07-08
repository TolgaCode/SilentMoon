import "../config/config.js"
import fs from 'fs'
import mongoose from 'mongoose';
import thumbsupply from 'thumbsupply'

import data from './data_img.json' assert {type: 'json'};
import { Image } from '../model/Image.js'
import { log } from "console";

mongoose.connect(process.env.DB)




// GridFSBucket provides methods for working with files stored in the bucket
// creating this bucket allows to perfom tasks as retrieving, updating etc. in the MongoDB using GridFS storage system
// mongoose.connect represents the active MongoDB connection managed by mongoose 
let gridFSBucket = new mongoose.mongo.GridFSBucket(mongoose.connection, {
    bucketName: 'imagebucket'
});

console.log('Connected to MongoDB');

for await (let imageData of data.images) {

    // upload videofile to mongoDB using gridFS - filepath and filename are given by seed_test_data.json
    // pipe offers reading from source and uploading to destination simultaneously
    await fs.createReadStream(imageData.filepath).pipe(gridFSBucket.openUploadStream(imageData.filename));

    // stat gets the statistical info about the file (e.g. filesize, creationtime, etc.)
    const stat = await fs.statSync(imageData.filepath);

    // generating a thumbnail filename
    // let thumbnail = imageData.filename;
    // // generating a thumbnail image at the specified path
    // // handle the result of generating the thumbnail which is stored in a cachepath
    // // creates a read stream and pipes it to a gridFSBucket in MongoDB
    // await thumbsupply.generateThumbnail(imageData.filepath)
    //     .then((cachePath) => {
    //         fs.createReadStream(cachePath).pipe(gridFSBucket.openUploadStream(thumbnail));
    //     });

    let image = new Image({
        title: imageData.title,
        level: imageData.level,
        category: imageData.category,
        filename: imageData.filename,
        filesize: stat.size,
        // thumbnail: thumbnail,
        description: imageData.description
    });

    await image.save();

    // mongoose.disconnect();
}