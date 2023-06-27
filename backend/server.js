import express from "express";
import dotenv from "dotenv";

const PORT = process.env.BE_PORT || 3000;
const app = express();

app.get("/status", (req, res) => {
    res.send({ status: "OK" });
});


app.listen(PORT, () => {
    console.log("Server running on Port:", PORT);
});




