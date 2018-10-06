import React, { Component } from "react";
import axios from "axios";

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
		const { watchList } = this.state;
		return <div className="watch-list">{watchList}</div>;
	}
}

export default WatchList;
