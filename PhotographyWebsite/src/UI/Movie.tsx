import { Link } from "react-router-dom";
import { PropsWithChildren } from "react";
import movie from "../Utils/Interface";

interface MyClassName {
  movie: movie,
  id: number
 
}

const Movie = (props: PropsWithChildren<MyClassName>) => {

  return (
    <Link to={`/details/${props.id}`}>
      <h3>{props.movie.Title}</h3>
      <h4>Year: {props.movie.Year}</h4>
      <h4>Actors: {props.movie.Actors}</h4>
      <h4>Country: {props.movie.Country}</h4>
    </Link>
  );
};

export default Movie;