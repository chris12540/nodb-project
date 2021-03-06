let watchList = [];

module.exports = {
	create: (req, res) => {
		watchList.push(req.body);
		res.json(watchList);
	},
	read: (req, res) => {
		res.json(watchList);
	},
	update: (req, res) => {
		getMovie(req, res, index => {
			watchList[index] = { ...watchList[index], title: req.body.title };
		});
		res.json(watchList);
	},
	delete: (req, res) => {
		getMovie(req, res, index => {
			watchList.splice(index, 1);
			res.json(watchList);
		});
	},
	search: (req, res) => {}
};

getMovie = (req, res, callback) => {
	const indexId = req.params.id;
	const index = watchList.findIndex(movie => parseInt(indexId) === movie.id);
	if (index === -1) {
		res.status(404).send(`Error! Movie with id[${req.params.id}] does not exist.`);
	} else {
		callback(index);
	}
};
