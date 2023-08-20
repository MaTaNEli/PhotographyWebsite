import Card from "./UI/Card";
import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [movies,setMovies] = useState(Array<object>);
  

  useEffect(() => {
    (async () => {
      try{
        const res = await axios.get('http://localhost:3000/');

        console.log(1)
        if (res.status == 200) {
          setMovies(res.data.results)       
        }
      } catch (error) {
        console.log(error)
      }
    })();
  }, [])

  return ( movies ? 
  <div>
    {movies.map((movie) =>(
      <Card  movie={movie} key={movie['id']}/>        
    ))}
  </div> : <div></div>
  )
}

export default HomePage;