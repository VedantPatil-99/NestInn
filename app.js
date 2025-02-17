const express = require("express");
const app = express();
const mongoose = require("mongoose");

const MONGO_URL = "mongodb://127.0.0.1:27017/nestinn";

async function main() {
	await mongoose.connect(MONGO_URL);
}

main()
	.then(() => {
		console.log("Connected to DB");
	})
	.catch((err) => {
		console.log(err);
	});

app.get("/", (req, res) => {
	res.send("Hi, I'm root.");
});

const port = 3000;
app.listen(port, () => {
	console.log(`Server is listening to the port ${port}`);
});
