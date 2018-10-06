let watchList = [];

module.exports = {
	create: (req, res) => {
		watchList.push(req.body);
	},
	read: (req, res) => {
		res.json(watchList);
	},
	update: (req, res) => {
		getMovie(req, index => {
			watchList[index] = { ...watchList[index], title: req.body.title };
		});
	},
	delete: (req, res) => {
		getMovie(req, index => {
			watchList.splice(index, 1);
		});
	},
	search: (req, res) => {}
};

getMovie = (req, callback) => {
	const indexId = req.params.id;
	const index = watchList.findIndex(movie => indexId === movie.id);
	if (index === -1) {
		res.status(404).send(`Error! Movie with id[${req.params.id}] does not exist.`);
	} else {
		callback(index);
	}
};
