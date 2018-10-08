import React from "react";

import "./removeMovie.css";

const RemoveMovie = props => {
	return (
		<button
			onClick={() => {
				props.removeMovie(props.id);
			}}
			className="remove-movie"
		>
			x
		</button>
	);
};

export default RemoveMovie;
