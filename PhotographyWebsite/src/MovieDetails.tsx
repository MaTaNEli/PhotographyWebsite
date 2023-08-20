import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try{
        const res = await axios.get(`http://localhost:3000/${id}`);
        if (res.status == 200) {
          setMovie(res.data)
        }
      } catch (error) {
        console.log(error)
      }
    })();
  }, [id])

  const image = movie ? "https://image.tmdb.org/t/p/w500" + movie['backdrop_path'] : ""

  console.log(movie? movie : null)
  return movie ? <div>
    <h2>{movie['original_title']}</h2>
    <img src={image} alt="" ></img>
    <h4>{movie['overview']}</h4>
  </div> : null
}

export default MovieDetails;

{/* <h2>{movie.Title}</h2>
    <h4>Year: {movie.Year}</h4>
    <h4>Actors: {movie.Actors}</h4>
    <h4>Country: {movie.Country}</h4>
    <h4>Plot: {movie.Plot}</h4>
    {movie.Images.map((img, id) => <img key={id} src={img} alt="" width="800" />)} 
  poster_path*/}