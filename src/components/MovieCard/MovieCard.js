import React from "react";
import AddMovie from "../AddMovie/AddMovie";

import "./movieCard.css";

const MovieCard = props => {
	const { id, title, poster_path, overview, vote_average, release_date } = props.movie;

	const overviewLength = 150;
	let display;

	props.display ? (display = "none") : (display = "block");

	return (
		<div id={id} className="card" style={{ display: display }}>
			<h1 className="title">{title}</h1>
			<img
				src={"https://image.tmdb.org/t/p/w342" + poster_path}
				alt=""
				className="poster"
				onClick={() => {
					props.displayModal(props.movie);
				}}
			/>
			<p className="overview">
				{overview.length > overviewLength ? overview.substring(0, overviewLength) + "..." : overview}
			</p>
			<div className="score">{vote_average}</div>
			<p className="release">{release_date}</p>
			<AddMovie addMovie={props.addMovie} id={id} />
		</div>
	);
};

export default MovieCard;
