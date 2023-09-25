import Card from "../UI/Card";
import {mainServer} from '../../ApiLinks/ApiLink'
import {movieInterFace} from "../../Utils/Interface";
import { useState, PropsWithChildren } from "react";
import './MoviesList.css'
import MyButton from "../MyButton/MyButton";
import { Navigate } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query"

interface Path {
  path:string
}

const GetMovies = (props: PropsWithChildren<Path>) => {
  //const queryClient = useQueryClient()
  const [movies, setMovies] = useState(Array<movieInterFace>);
  const [pageNumber, setPage] = useState(1)
  const [offset, setOffset] = useState(0)
  const [endOfPage, setEndOfPage] = useState(false);

  const getMovies = async () => {
    try{
      const res = await mainServer.get(`${props.path}/${offset}`);
      if (res.status == 200) {
        setMovies(res.data)
        return res.data;  
      }
    } catch (error) {
      console.log("error")
      return <Navigate to='/' replace/>
    }
  };

  const getQuery = useQuery(['getMovies', offset, props.path], getMovies)

  //increase page
  const increase = () => {
        setOffset((offset) => offset + 20) 
        setPage((count) => count + 1);
        setEndOfPage(false)        
    
  };

  //decrease page
  const decrease = () => {
    if (pageNumber >= 1 && offset - 20 >= 0){        
          setOffset((offset) => offset - 20) 
          setPage((count) => count - 1); 
          setEndOfPage(false) 
    }
  };

  if (getQuery.isLoading) return <div className="text-overlay">Loading....</div>
  if (getQuery.isError) return <div>{JSON.stringify(getQuery.error)}</div>

  return ( movies ? 
    <div>
      <div className="myScreen">
          {getQuery.data.map((movie: movieInterFace) =>(
            <div key={movie['id']}>
              <Card movie={movie} page={pageNumber} sitePath={props.path} key={movie['id']}/> 
            </div>      
          ))}
      </div>
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