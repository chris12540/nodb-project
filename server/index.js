const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const data = "You will become an amazing web developer! 💻";

app.get("/data", (req, res) => {
	res.status(200).send(data);
});

const PORT = 4000;
app.listen(PORT, () => {
	console.log(`Server has shipped from port ${PORT} ⛵️`);
});
