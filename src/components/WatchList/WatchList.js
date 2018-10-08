import React, { Component } from "react";
import WatchCard from "../WatchCard/WatchCard";

import axios from "axios";

class WatchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      watchList: this.props.watchList
    };
  }

  componentDidMount() {
    axios.get("/api/movies").then(res => {
      this.setState({ watchList: res.data });
    });
  }

  render() {
    const watchList = this.state.watchList.map(movie => (
      <WatchCard key={movie.id} movie={movie} />
    ));

    return <div className="watch-list">{watchList}</div>;
  }
}

export default WatchList;
