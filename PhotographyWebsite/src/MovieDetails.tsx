import { useParams } from "react-router-dom";



const MovieDetails = () => {
  const { id } = useParams();

  
  return  <div>
    
  </div>
}

export default MovieDetails;

{/* <h2>{movie.Title}</h2>
    <h4>Year: {movie.Year}</h4>
    <h4>Actors: {movie.Actors}</h4>
    <h4>Country: {movie.Country}</h4>
    <h4>Plot: {movie.Plot}</h4>
    {movie.Images.map((img, id) => <img key={id} src={img} alt="" width="800" />)} */}