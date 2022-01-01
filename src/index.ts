import express from "express";
import * as fs from "fs";
import morgan from "morgan";
import "dotenv/config";

const app = express();
const port = process.env["PORT"] || "3000";

app.use(morgan("tiny"));
app.use(express.static("./public"));

app.get("/data", (request, response) => {
    response.status(200).json(JSON.parse(fs.readFileSync("./public/data/app_posts.json", "utf-8")))
});

app.listen(port, () => {
    console.log(`\u001B[92mListening to Port ${port}\u001B[39m`);
});