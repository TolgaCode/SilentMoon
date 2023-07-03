import "./config/config.js"

import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { Video } from "./model/Video.js"
import { User } from "./model/User.js";
import { /*authenticateToken,*/ generateAccessToken } from "./lib/jwt.js";
import cookieParser from "cookie-parser";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
mongoose.connect(process.env.DB);

// GridFSBucket provides methods for working with files stored in the bucket
// creating this bucket allows to perfom tasks as retrieving, updating etc. in the MongoDB using GridFS storage system
// mongoose.connect represents the active MongoDB connection managed by mongoose 
let gridFSBucket = new mongoose.mongo.GridFSBucket(mongoose.connection, {
    bucketName: 'videobucket'
});

// ========================
// SignUp
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

// ========================
// LogIn
app.post("/api/login", async (req, res) => {
    const { email } = req.body;

    const user = await User.findOne({ email }).select("+hash").select("+salt");
    if (!user) {
        return res
            .status(401)
            .send({ error: { message: "Email and password combination wrong!" } });
    }

    // vergleicht Passwort mit user.verifyPassword
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


// ========================
// LogOut
app.post("/api/logout", (req, res) => {
    res.clearCookie("auth");
    res.send("Logged out successfully")
})


// _________________
// app.get("/api/verified", authenticateToken, async (req, res) => {
//     const user = await User.findOne({ email: req.userEmail });
//     res.send(user);
// });
// _________________

// api route to receive all the videos or only the once you filteres using level and category query
app.get('/api/yogavideos/', async (req, res) => {
    console.log(process.env.DB)
    let { level, category } = req.query;

    // using spread operator along with conditional logic including the level and category criteria 
    // if the condition is true the level/category property and corresponding value is added to the query
    try {
        const videos = await Video.find({
            // using object spreader to conditionally include the level property when the condition is met, otherwise the resulting object will be empty
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
});

// api route to get specific video using its id from the db
app.get('/api/yogavideos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const video = await Video.findOne({ _id: id });
        res.send(video)
    }
    catch (err) {
        console.error(err)
    }
});

// get thumbnail using thumbnail
app.get('/api/thumbnail/:thumbnail', async (req, res) => {
    const { thumbnail } = req.params;
    try {
        const video = await Video.findOne({ thumbnail: thumbnail });
        // get the thumbnail image using open download stream and pipe it to the frontend as response
        gridFSBucket.openDownloadStreamByName(video.thumbnail).pipe(res)
    }
    catch (err) {
        console.error(err)
    }
})

// api route to get the actual video
app.get('/api/videostream/:filename', async (req, res) => {
    const { filename } = req.params;

    // the range header is used to request specifc byte ranges of a file when streaming
    // specific byte ranges refer to a portion of the file that is requested based on a range of byte positions, therefore one can request and receive only a specific portion of a file instead of downloading it completly
    const range = req.headers.range;
    // test console.log(range)

    const video = await Video.findOne({ filename: filename });
    const fileSize = video.filesize

    // if the range header exits a range request has been made
    if (range) {
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1]
            ? parseInt(parts[1], 10)
            : fileSize;

        // when a specific byte range of a video file is requested, the server divides the file into smaller chunks to transmit only the requested portion
        const chunksize = (end - start) + 1;
        // opens a download stream, specifying the start and end postions to only retrieve the requested range
        const file = gridFSBucket.openDownloadStreamByName(video.filename, { start, end });
        // sets the response headers to indicate the content being sent
        const head = {
            "Content-Range": `bytes ${start}-${end - 1}/${fileSize}`,
            "Accept-Ranges": "bytes",
            "Content-Length": chunksize,
            "Content-Type": "video/mp4",
        };
        // 206 statuscode is used to respond to the requested byte range, along with it is the head that carries information about the conetnt-range and -length
        res.writeHead(206, head);
        // while reading the mp4 file it's piped towards the frontend
        file.pipe(res);
    }
    else {
        try {
            const head = {
                "Content-Length": fileSize,
                "Content-Type": "video/mp4"
            };
            res.writeHead(200, head);
            let file = gridFSBucket.openDownloadStreamByName(video.filename).pipe(res)
        }
        catch (err) {
            console.error(err)
        }
    }
})

app.put('/api/favouriseVideo/:id', async (req, res) => {

})

app.listen(PORT, () => {
    console.log("Server running on Port:", PORT);
});





