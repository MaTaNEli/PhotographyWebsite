import { PropsWithChildren, } from "react";
import movie from "../Utils/Interface";
import Movie from "./Movie";



const Card = (props: PropsWithChildren<movie>) => {
  const cartStyle = {
    width: '400px', 
    height: '200px', 
    backgroundImage: `url('${props.movie['backdrop_path'] ? 'https://image.tmdb.org/t/p/w500' + props.movie['backdrop_path'] : ""}')`,
    backgroundsize: 'cover',
    backgroundposition: 'center',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',

  }
  return (
    <div style={cartStyle}>
      <Movie movie={props.movie}/>
    </div>)
};

export default Card;

//<Movie id={props.id} movie={props.movie}/>
