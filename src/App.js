import React, { Component } from "react";
import axios from "axios";
import MovieCard from "./components/MovieCard/MovieCard";
import WatchList from "./components/WatchList/WatchList";

import logo from "./images/film-logo.png";

import "./reset.css";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			frontPage: {}
		};

		this.apiKey = "185d7c7b5d2f8cfd2241ab4cfc208a96";
		this.api = "https://api.themoviedb.org/3";
		this.lang = "language=en-US";
	}

	componentDidMount() {
		axios.get(`${this.api}/movie/popular?api_key=${this.apiKey}&${this.lang}&page=1`).then(res => {
			this.setState({
				frontPage: res.data
			});
		});
	}

	render() {
		const { frontPage } = this.state;
		let movieCards = [];

		if (frontPage.results) {
			movieCards = frontPage.results.map(movie => {
				return <MovieCard key={movie.id} movie={movie} />;
			});
		} else {
			movieCards = <p className="loading">Loading...</p>;
		}

		return (
			<div className="App">
				<header>
					<div className="logo">
						<img src={logo} alt="" />
						<h1>Movie List</h1>
					</div>
					<WatchList />
				</header>
				<main>{movieCards}</main>
			</div>
		);
	}
}

export default App;
