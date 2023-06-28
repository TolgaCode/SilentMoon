import mongoose from "mongoose";
import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config({ path: new URL("../../.env", import.meta.url).pathname });
mongoose.connect(process.env.DB);

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    salt: { type: String, required: true, select: false },
    hash: { type: String, required: true, select: false },
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