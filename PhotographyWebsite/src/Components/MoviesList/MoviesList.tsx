import Card from "../UI/Card";
import {mainServer} from '../../ApiLinks/ApiLink'
import {movieInterFace} from "../../Utils/Interface";
import { useState, useEffect, PropsWithChildren } from "react";

interface Path {
  path:string
}
const GetMovies = (props: PropsWithChildren<Path>) => {
  const [movies, setMovies] = useState(Array<movieInterFace>);
  //const [verified, setVerified] = useState()

  useEffect(() => {
    (async () => {
      try{
        const res = await mainServer.get(props.path);

        if (res.status == 200) {
          setMovies(res.data.results)       
        }
        if (res.status == 401) {
          console.log(res.data.results)
        }
      } catch (error) {
        console.log(error)
      }
    })();
  }, [props.path])

  return ( movies ? 
  <div>
    {movies.map((movie) =>(
      <div key={movie['id']}>
        <Card movie={movie} key={movie['id']}/> 
      </div>      
    ))}
  </div> : null
  )
}

export default GetMovies;