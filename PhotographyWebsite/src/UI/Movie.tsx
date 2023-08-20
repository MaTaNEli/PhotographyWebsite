import { Link } from "react-router-dom";
import { PropsWithChildren } from "react";
import movie from "../Utils/Interface";


const Movie = (props: PropsWithChildren<movie>) => {

  return (
    <Link to={`/details/${props.movie.id}`}>
      <h3>{props.movie['original_title']}</h3>
      <h4>Release Date: {props.movie['release_date']}</h4>
      <h4>Actors: {props.movie.Actors}</h4>
      <h4>Country: {props.movie.Country}</h4>
    </Link>
  );
};

export default Movie;