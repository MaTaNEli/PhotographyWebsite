import { useParams } from "react-router-dom";
import data from "./Utils/Movie";


const MovieDetails = () => {
  let movie = null
  const { id } = useParams();

  if (id && !isNaN(Number(id))){
    movie = data[parseInt(id)]
  }

  return movie ?  <div>
    <h2>{movie.Title}</h2>
    <h4>Year: {movie.Year}</h4>
    <h4>Actors: {movie.Actors}</h4>
    <h4>Country: {movie.Country}</h4>
    <h4>Plot: {movie.Plot}</h4>
    {movie.Images.map((img, id) => <img key={id} src={img} alt="" width="800" />)}
  </div> : null
}

export default MovieDetails;