import { movieInterFace } from "../../Utils/Interface";
import { Link } from "react-router-dom";
import './Card.css'

interface Props {
  movie: movieInterFace; 
  sitePath:string;
}

const MovieCard = (props: Props) => {
  const imageSrc = props.movie.poster_path ? import.meta.env.VITE_APP_IMG + props.movie.poster_path : ""
  return (imageSrc ? 
    <div className="myCard">
      <Link style={{textDecoration: 'none'}} className="myLink" to={`/details/${props.movie.id}${props.sitePath}`}>    
        <img src={imageSrc} alt="My Image" ></img>
          <h2 className="text-overlay">{props.movie.title}</h2>
          <p className="text-overlay">Release Date: {props.movie.release_date}</p>   
      </Link>
    </div> : null)
};

export default MovieCard;