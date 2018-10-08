import React from "react";

const WatchCard = props => {
  const {
    id,
    title,
    poster_path,
    overview,
    vote_average,
    release_date
  } = props.movie;

  const overviewLength = 150;

  return (
    <div id={id} className="watch-card">
      <h1 className="watch-title">{title}</h1>
      <img
        src={"https://image.tmdb.org/t/p/w342" + poster_path}
        alt=""
        className="watch-poster"
      />
      <p className="watch-overview">
        {overview.length > overviewLength
          ? overview.substring(0, overviewLength) + "..."
          : overview}
      </p>
      <div className="watch-score">{vote_average}</div>
      <p className="watch-release">{release_date}</p>
    </div>
  );
};

export default WatchCard;
