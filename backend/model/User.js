import mongoose from "mongoose";
import crypto from "crypto";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    salt: { type: String, required: true, select: false },
    hash: { type: String, required: true, select: false },
    favVideos: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Video" }],
    favMeditations: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Image" }],
    reminder: { time: { type: String, default: "00:00" }, days: [{ type: String }] }
});

userSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(64).toString("hex");
    this.hash = crypto
        .pbkdf2Sync(password, this.salt, 1000, 64, "sha512")
        .toString("hex");
};

userSchema.methods.verifyPassword = function (password) {
    const hash = crypto
        .pbkdf2Sync(password, this.salt, 1000, 64, "sha512")
        .toString("hex");

    return this.hash === hash
};

export const User = mongoose.model("User", userSchema)