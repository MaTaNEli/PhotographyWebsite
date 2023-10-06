import { TvShow } from "../../Utils/Interface";
import { Link } from "react-router-dom";
import './Card.css'

interface Props {
  show: TvShow; 
  sitePath:string;
}

const TvShowCard = (props: Props) => {
  const imageSrc = props.show.poster_path ? import.meta.env.VITE_APP_IMG + props.show.poster_path : ""
  return (imageSrc ? 
    <div className="myCard">
      <Link style={{textDecoration: 'none'}} className="myLink" to={`/details/${props.show.id}${props.sitePath}`}>    
        <img src={imageSrc} alt="My Image" ></img>
          <h2 className="text-overlay">{props.show.name}</h2>
          <p className="text-overlay">Release Date: {props.show.first_air_date}</p>   
      </Link>
    </div> : null)
};

export default TvShowCard;