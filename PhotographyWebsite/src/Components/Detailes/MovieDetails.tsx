import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './MovieDetails.css'


const MovieDetails = () => {
  const navigate = useNavigate();
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

  const goBack = () => {
    navigate('/')
  }
  const image = movie ? import.meta.env.VITE_APP_IMG + movie['backdrop_path'] : ""

  return movie ? 
    <div>
      <div className="root">
      <h2 className="text">{movie['original_title']}</h2>
      <img src={image} alt="" ></img>
      <h4 className="text">{movie['overview']}</h4>
      <br />
      <button  onClick={goBack}>Return Home</button>
    </div >
    
  </div> : null
}

export default MovieDetails;
