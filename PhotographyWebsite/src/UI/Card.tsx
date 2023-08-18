import { PropsWithChildren } from "react";
import movie from "../Utils/Interface";
import Movie from "./Movie";

interface MyClassName {
  movie: movie,
  id: number
}

const Card = (props: PropsWithChildren<MyClassName>) => {
  const cartStyle = {
    width: '400px', 
    height: '200px', 
    backgroundImage: `url('${props.movie["Images"] ? props.movie["Images"][0] : ""}')`,
    backgroundsize: 'cover',
    backgroundposition: 'center',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',

  }
  return (
    <div style={cartStyle}>
      <Movie id={props.id} movie={props.movie}/>
    </div>)
};

export default Card;
