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
			frontPage: [],
			watchList: []
		};

		this.apiKey = "185d7c7b5d2f8cfd2241ab4cfc208a96";
		this.api = "https://api.themoviedb.org/3";
		this.lang = "language=en-US";
	}

	componentDidMount() {
		axios.get("/api/movies").then(res => {
			this.setState({
				watchList: res.data
			});
		});
		axios.get(`${this.api}/movie/popular?api_key=${this.apiKey}&${this.lang}&page=1`).then(res => {
			this.setState({
				frontPage: res.data.results
			});
		});
	}

	addMovie = id => {
		const { frontPage } = this.state;
		const movieIndex = frontPage.findIndex(movie => movie.id === id);
		axios.post("/api/movies", frontPage[movieIndex]).then(res => {
			document.getElementById(id).style.display = "none";
			this.setState({
				watchList: res.data
			});
		});
	};

	removeMovie = id => {
		axios.delete("/api/movies/" + id).then(res => {
			this.setState({
				watchList: res.data
			});
			console.log((document.getElementById(id).style.display = "block"));
		});
	};

	render() {
		const { frontPage, watchList } = this.state;
		let movieCards = [];

		if (frontPage.length > 0) {
			movieCards = frontPage.map(movie => {
				return <MovieCard key={movie.id} movie={movie} addMovie={this.addMovie} />;
			});
		} else {
			movieCards = <p className="loading">Loading...</p>;
		}

		return (
			<div className="App">
				<header>
					<div className="logo">
						<img src={logo} alt="Logo" />
						<h1>Movie List</h1>
					</div>
					<WatchList watchList={watchList} removeMovie={this.removeMovie} />
				</header>
				<main>{movieCards}</main>
			</div>
		);
	}
}

export default App;
