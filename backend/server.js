import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { User } from "./model/User.js";
import { /*authenticateToken,*/ generateAccessToken } from "./lib/jwt.js";
import cookieParser from "cookie-parser";

dotenv.config({ path: new URL("../.env", import.meta.url).pathname });

const PORT = process.env.BE_PORT || 3000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());


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

app.listen(PORT, () => {
    console.log("Server running on Port:", PORT);
});





