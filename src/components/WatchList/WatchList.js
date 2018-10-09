import React, { Component } from "react";
import WatchCard from "../WatchCard/WatchCard";

import axios from "axios";

import "./watchList.css";

class WatchList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			watchList: []
		};
	}

	componentDidMount() {
		axios.get("/api/movies").then(res => {
			this.setState({ watchList: res.data });
		});
	}

	render() {
		const watchList = this.props.watchList.map(movie => (
			<WatchCard
				key={movie.id}
				movie={movie}
				removeMovie={this.props.removeMovie}
				displayModal={this.props.displayModal}
			/>
		));

		return <div className="watch-list">{watchList}</div>;
	}
}

export default WatchList;
