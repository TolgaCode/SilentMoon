import { model, Schema } from 'mongoose';

const videoSchema = new Schema({
    title: String,
    level: String,
    category: String,
    filename: String,
    filesize: Number,
    thumbnail: String,
    description: String
});

export const Video = model('Video', videoSchema)