const express = require("express");
const bodyParser = require("body-parser");
const movieController = require("./controllers/movieController");

const app = express();
app.use(bodyParser.json());

app.get("/api/movies", movieController.read);
app.get("/api/movies?q", movieController.search);
app.post("/api/movies", movieController.create);
app.patch("/api/movies/:id", movieController.update);
app.delete("/api/movies/:id", movieController.delete);

const PORT = 4000;
app.listen(PORT, () => {
	console.log(`Server has shipped from port ${PORT} ⛵️`);
});
