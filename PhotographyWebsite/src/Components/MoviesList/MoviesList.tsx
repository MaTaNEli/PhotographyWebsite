import MovieCard from "../UI/MovieCard";
import TvShowCard from "../UI/TvShowCard"
import {mainServer} from '../../ApiLinks/ApiLink'
import {movieInterFace, TvShow} from "../../Utils/Interface";
import { useState, PropsWithChildren } from "react";
import './MoviesList.css'
import MyButton from "../MyButton/MyButton";
import { useQuery } from "@tanstack/react-query"

interface Path {
  path:string
}

const GetMovies = (props: PropsWithChildren<Path>) => {
  //const queryClient = useQueryClient()
  const [pageUp, setPageUp] = useState(true)
  const [pageNumber, setPage] = useState(1)
  const [movies, setMovies] = useState(Array<movieInterFace>)
  const [offset, setOffset] = useState(0)
  const [endOfPage, setEndOfPage] = useState(false);
  const [tvShow, setTvShow] = useState(false)

  const getMovies = async () => {
    try{
      const res = await mainServer.get(`${props.path}/${offset}`);
      
      setTvShow(props.path.includes('tvShow'))
      if (res.status == 200 && !endOfPage) {
        offset > 0 || !pageUp ? setPage((count) => pageUp? count + 1 : count - 1) : null;
        setMovies(res.data)
        return res.data;  
      } else if (res.status == 204) {
        setOffset((offset) => offset - 20) 
        setEndOfPage(true)
        setPageUp(false)
        return movies;
      } else 
        return movies;
    } catch (error) {
      return null;
    }
  };

  const getQuery = useQuery(['getLists', offset, props.path], getMovies)

  //increase page
  const increase = () => {
        setOffset((offset) => offset + 20) 
        setPageUp(true) 
        setEndOfPage(false)        
    
  };

  //decrease page
  const decrease = () => {
    if (pageNumber >= 1 && offset - 20 >= 0){  
          setPageUp(false)      
          setOffset((offset) => offset - 20) 
          setEndOfPage(false) 
    }
  };

  if (getQuery.isLoading) return <div className="text-overlay">Loading....</div>
  if (getQuery.isError) return <div>{JSON.stringify(getQuery.error)}</div>

  return ( getQuery.data.length ? 
    <div>
      {tvShow ?
      <div className="myScreen">
        {getQuery.data?.map((tvShow: TvShow) =>(
          <div key={tvShow.id}>
            <TvShowCard show={tvShow} sitePath={props.path} key={tvShow.id}/> 
          </div>      
        ))}
      </div> 
       : 
      <div className="myScreen">
          {getQuery.data?.map((movie: movieInterFace) =>(
            <div key={movie.id}>
              <MovieCard movie={movie} sitePath={props.path} key={movie.id}/> 
            </div>      
          ))}
      </div>}

      <div >  
        <MyButton className="leftButton" isDisabled={pageNumber == 1}  onClick={decrease}>
          <p className="text-overlay">{'<'}</p>
        </MyButton>
      
      <div>
        <h2 className="buttonText">{pageNumber}</h2>
      </div>
        <MyButton className="rightButton" isDisabled={endOfPage} onClick={increase}>
          <p className="text-overlay"> {'>'}</p>
        </MyButton>
      </div>
  </div>
   : 
  null
  )
}

export default GetMovies;

// const increase = useCallback(async () => {
  //   try{  
  //     const res = await mainServer.get(`${props.path}/${offset + 20}`);
  //     if (res.status == 200 && res.data.length) {
  //       setMovies(res.data) 
  //       setOffset((offset) => offset + 20) 
  //       setPage((count) => count + 1);
  //       setEndOfPage(false)     
  //     } else {
  //       setEndOfPage(true)
  //     }
  //   } catch (error) {
  //     console.log("error")
  //     return <Navigate to='/' replace/>
  //   }
    
  // },[props.path, offset]);