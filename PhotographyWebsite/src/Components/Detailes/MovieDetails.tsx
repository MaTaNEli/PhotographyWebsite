import {mainServer} from '../../ApiLinks/ApiLink'
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './MovieDetails.css'

const MovieDetails = () => {
  const navigate = useNavigate();
  const [movie, setMovie] = useState();
  const { id, sitePath } = useParams();

  useEffect(() => {
    (async () => {
      try{
        const res = await mainServer.get(`${id}`);
        
        if (res.status == 200) {
          setMovie(res.data)       
        }
      } catch (error) {
        console.log(error)
      }
    })();
  }, [id])

  const addToFavorite = async () => {
    console.log(1, `saveToFavorite/${id}`)
    try{
      const res = await mainServer.get(`saveToFavorite/${id}`);
      
      if (res.status == 200) {
        console.log('saved')      
      }
    } catch (error) {
      console.log(error)
    }
  }

  const goBack = () => {
    navigate(`/${sitePath}`)
  }
  const image = movie ? import.meta.env.VITE_APP_IMG + movie['backdrop_path'] : ""

  return movie ? 
    <div>
      <div className="movieDetails">
        <h2 className="text">{movie['original_title']}</h2>
        <img src={image} alt="" ></img>
        <h4 className="text">{movie['overview']}</h4>
        <br />
        <button onClick={goBack}>Return Home</button>
      </div>
      <button className='favorite' onClick={addToFavorite}>Add to Favorites</button>
    </div> : null
}

export default MovieDetails;
