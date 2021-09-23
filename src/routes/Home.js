import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Movie from "../components/Movie";

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);

  return (
    <div style={style}>
      {loading ? (
        <div>loading...</div>
      ) : (
        data.movies.map((m) => <Movie id={m.id} key={m.id} />)
      )}
    </div>
  );
};

export default Home;