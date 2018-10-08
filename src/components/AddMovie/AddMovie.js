import React from "react";

import "./addMovie.css";

const AddMovie = props => {
  return (
    <div
      className="add-movie"
      onClick={() => {
        props.addMovie(props.id);
      }}
    >
      +
    </div>
  );
};

export default AddMovie;
