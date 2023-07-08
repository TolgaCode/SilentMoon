import { model, Schema } from 'mongoose';

const imageSchema = new Schema({
    title: String,
    level: String,
    category: String,
    filename: String,
    filesize: Number,
    thumbnail: String,
    description: String
});

export const Image = model('Image', imageSchema)