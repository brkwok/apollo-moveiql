import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ id }) => {
  return (
    <div>
      <Link to={`/${id}`} />
    </div>
  );
};

export default Movie;