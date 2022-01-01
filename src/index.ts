import express from "express";
import * as RateLimit from "express-rate-limit";
import * as fs from "fs";
import morgan from "morgan";
import "dotenv/config";

const app = express();
const port = process.env["PORT"] || "3000";

const rateLimiter = RateLimit.default({
    windowMs: 60 * 1000, // 60 * 1000ms = 1 minute
    max: 5
});

app.use('/data', rateLimiter)
app.use(morgan("tiny"));
app.use(express.static("./public"));

app.get("/data", (request, response) => {
    response.json(JSON.parse(fs.readFileSync("./public/data/app_posts.json", "utf-8")))
});

app.listen(port, () => {
    console.log(`\u001B[92mListening to Port ${port}\u001B[39m`);
});