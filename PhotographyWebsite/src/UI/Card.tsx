import {movie} from "../Utils/Interface";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import './Card.css'

interface Props {
  movie: movie; 
}

const Card = (props: Props) => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    return () => {
      props.movie['backdrop_path'] ? setImageSrc(import.meta.env.VITE_APP_IMG + props.movie['backdrop_path']) : "";
    };
  }, [props.movie]);

  return (imageSrc ? 
    <div>
      <Link className="concept" to={`/details/${props.movie.id}`}>    
        <img src={imageSrc} alt="My Image" ></img>
          <h2 className="text-overlay">{props.movie['original_title']}</h2>
          <p className="text-overlay">Release Date: {props.movie['release_date']}</p>   
      </Link>
    </div> : null)
};

export default Card;