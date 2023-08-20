import data from "./Utils/Movie";
import Card from "./UI/Card";
import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [movies,setMovies] = useState();
  const [error, SetError] = useState("")

  useEffect(() => {
    (async () => {
      try{
        const res = await axios.get('http://localhost:3000/');

        console.log(1)
        if (res.status == 200) {
          setMovies(res.data)
         
        }
      } catch (error) {
        const err = error as AxiosError;
        SetError(err.message)
      }
      
    })();
  }, [])
 
  // (async () => {
  //   const res = await axios.get('http://localhost:3000/');

  //   if (res.status == 200) {
  //     setMovies(res.data)
  //     console.log(movies)
  //   }
  // })()

  return ( movies ? 
  <div>
    {data.map((movie,key) => (
      <Card  movie={movie} key={key} id={key}/>        
    ))}
  </div> : {error}
  )
}

export default HomePage;