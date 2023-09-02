import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './MovieDetails.css'



const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try{
        const res = await axios.get(`${id}`);
        if (res.status == 200) {
          setMovie(res.data)
        }
      } catch (error) {
        console.log(error)
      }
    })();
  }, [id])

  const image = movie ? import.meta.env.VITE_APP_IMG + movie['backdrop_path'] : ""

  return movie ? <div>
    <h2>{movie['original_title']}</h2>
    <img className="img" src={image} alt="" ></img>
    <h4>{movie['overview']}</h4>
  </div> : null
}

export default MovieDetails;
