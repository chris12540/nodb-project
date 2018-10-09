import React, { Component } from "react";
import AddMovie from "../AddMovie/AddMovie";

import "./modal.css";

const Modal = props => {
	this.displayModal = (movie, remind) => {
		document.getElementById("modal-background").style.display = "block";
	};

	let { id, title, poster_path, vote_average, release_date, overview } = props.movie;
	if (Object.keys(props.movie).length !== 0) {
		this.displayModal();
	}

	const overviewLength = 1000;

	return (
		<div id="modal-background" onClick={props.close}>
			<div id="modal">
				<button className="close" onClick={props.close}>
					x
				</button>
				<h1 className="modal-title">{title}</h1>
				<img src={poster_path && "https://image.tmdb.org/t/p/w342" + poster_path} alt="" className="modal-poster" />
				<p className="modal-overview">
					{overview && overview.length > overviewLength ? overview.substring(0, overviewLength) + "..." : overview}
				</p>
				<div className="modal-score">{vote_average}</div>
				<p className="modal-release">Release Date: {release_date}</p>
				{/* {<input type="date"/> */}
				<AddMovie addMovie={props.addMovie} id={id} />
			</div>
		</div>
	);
};

export default Modal;
