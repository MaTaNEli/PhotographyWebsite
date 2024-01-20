import { movieInterFace } from '../../Utils/Interface';
import { useNavigate } from "react-router-dom";
import './InfoDetails.css'

interface Props {
  movie: movieInterFace; 
  sitePath:string;
}

const MovieDetails = (props: Props) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(`/${props.sitePath}`)
  }
  const image = import.meta.env.VITE_APP_IMG + props.movie.backdrop_path

  return (
    <div>
      <div className="infoDetails">
        <h2 className="text">{props.movie.original_title}</h2>
        <img src={image} alt="" ></img>
        <h4 className="text">{props.movie.overview}</h4>
        <button className="favorite">Add to favorite</button>
        <br />
        <button className='return' onClick={goBack}>Return Home</button>
      </div>
    </div>
  )
}

export default MovieDetails;
