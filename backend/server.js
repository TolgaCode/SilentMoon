import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

import { Video } from "./model/Video.js"
import { User } from "./model/User.js";
import { /*authenticateToken,*/ generateAccessToken } from "./lib/jwt.js";
import cookieParser from "cookie-parser";

dotenv.config({ path: new URL("../.env", import.meta.url).pathname });

const PORT = process.env.BE_PORT || 3000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
mongoose.connect(process.env.DB_TEST);

// GridFSBucket provides methods for working with files stored in the bucket
// creating this bucket allows to perfom tasks as retrieving, updating etc. in the MongoDB using GridFS storage system
// mongoose.connect represents the active MongoDB connection managed by mongoose 
let gridFSBucket = new mongoose.mongo.GridFSBucket(mongoose.connection, {
    bucketName: 'videobucket'
});

// unklar ob relevant: aber server läuft dann nicht mehr
// app.use(express.static(ReactAppDistPath.pathname));

app.get("/status", (req, res) => {
    res.send({ status: "OK" });
});

app.post("/api/signup", async (req, res) => {
    // neuen User erstellen
    const { name, surname, email } = req.body;
    const newUser = new User({ name, surname, email });
    // user.setPassword (hash und salt setzen)
    newUser.setPassword(req.body.password);
    // User speichern
    try {
        await newUser.save();
        return res.send({
            data: {
                message: "New User created",
                user: { name, surname, email },
            },
        });
    } catch (e) {
        console.error(e);
        if (e.name === "ValidationError") {
            return res.status(400).send({ error: e });
        }
        // wenn Email bereits als User existiert
        if (e.name === "MongoServerError" && e.code === 11000) {
            console.log("Redirect");
            return res.redirect("/login");
        }

        return res.status(500).send({ error: { message: "Unknown Server error" } });
    }
});

app.post("/api/login", async (req, res) => {
    const { email } = req.body;

    const user = await User.findOne({ email }).select("+hash").select("+salt");
    if (!user) {
        return res
            .status(401)
            .send({ error: { message: "Email and password combination wrong!" } });
    }

    // vergleiche passwort mit user.verifyPassword
    const isVerified = user.verifyPassword(req.body.password);
    if (isVerified) {
        const token = generateAccessToken({ email });
        res.cookie("auth", token, { httpOnly: true, maxAge: 1000 * 60 * 30 });
        return res.send({ data: { token } });
    }

    res
        .status(401)
        .send({ error: { message: "Email and password combination wrong!" } });
});

// _________________
// app.get("/api/verified", authenticateToken, async (req, res) => {
//     const user = await User.findOne({ email: req.userEmail });
//     res.send(user);
// });
// _________________

// api route to receive all the videos or only the once you filteres using level and category query
app.get('/api/yogavideos/', async (req, res) => {
    let { level, category } = req.query;

    // using spread operator along with conditional logic including the level and category criteria 
    // if the condition is true the level/category property and corresponding value is added to the query
    try {
        const videos = await Video.find({
            // only filter for level, if level is not undefined or 'undefined
            ...((level !== undefined && level !== 'undefined') && { level: level }),
            ...((category !== undefined && category !== 'undefined') && { category: category })
        });
        console.log({ level })
        console.log({ category })
        res.send(videos)
    }
    catch (err) {
        console.error(err)
    }
})

app.listen(PORT, () => {
    console.log("Server running on Port:", PORT);
});





