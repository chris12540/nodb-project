import React from "react";
import RemoveMovie from "../RemoveMovie/RemoveMovie";

import "./watchCard.css";

const WatchCard = props => {
	const { id, title, poster_path, overview, vote_average, release_date } = props.movie;

	const overviewLength = 150;

	return (
		<div id={id} className="watch-card">
			<h1 className="watch-title">{title}</h1>
			<img src={"https://image.tmdb.org/t/p/w342" + poster_path} alt="" className="watch-poster" />
			<p className="watch-overview">
				{overview.length > overviewLength ? overview.substring(0, overviewLength) + "..." : overview}
			</p>
			<div className="watch-score">{vote_average}</div>
			<p className="watch-release">{release_date}</p>
			<div className="watch-shadow" />
			<RemoveMovie id={id} removeMovie={props.removeMovie} />
		</div>
	);
};

export default WatchCard;
