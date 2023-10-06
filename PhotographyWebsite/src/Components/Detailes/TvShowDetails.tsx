import { TvShow } from '../../Utils/Interface';
import { useNavigate } from "react-router-dom";
import './InfoDetails.css'

interface Props {
  show: TvShow; 
  sitePath:string;
}

const TvShowDetails = (props: Props) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(`/${props.sitePath}`)
  }
  const image = import.meta.env.VITE_APP_IMG + props.show.backdrop_path

  return (
    <div>
      <div className="infoDetails">
        <h2 className="text">{props.show.name}</h2>
        <img src={image} alt="" ></img>
        <h4 className="text">{props.show.overview}</h4>
        <br />
        <button onClick={goBack}>Return Home</button>
      </div>
    </div>
  )
}

export default TvShowDetails;
