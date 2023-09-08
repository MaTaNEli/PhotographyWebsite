import Card from "../UI/Card";
import axios from "axios";
import {movie} from "../../Utils/Interface";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [movies, setMovies] = useState(Array<movie>);
  //const [verified, setVerified] = useState()

  useEffect(() => {
    (async () => {
      try{
        const res = await axios.get('/');

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
  }, [])

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

export default HomePage;