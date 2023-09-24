import Card from "../UI/Card";
import {mainServer} from '../../ApiLinks/ApiLink'
import {movieInterFace} from "../../Utils/Interface";
import { useState, useEffect, PropsWithChildren, useCallback } from "react";
import './MoviesList.css'
import MyButton from "../MyButton/MyButton";
import { Navigate } from 'react-router-dom';

interface Path {
  path:string
}

const GetMovies = (props: PropsWithChildren<Path>) => {
  const [movies, setMovies] = useState(Array<movieInterFace>);
  const [pageNumber, setPage] = useState(1)
  const [endOfPage, setEndOfPage] = useState(false);
  const [startOfPage, setStartOfPage] = useState(false);

  useEffect(() => {
    (async () => {
      try{  
        const res = await mainServer.get(`${props.path}/1`);
        if (res.status == 200) {
          setMovies(res.data.results)
          setPage(1)   
        }
      } catch (error) {
        console.log("error")
        return <Navigate to='/' replace/>
      }
    })();
  }, [props.path])

  //increase page
  const increase = useCallback(async () => {
    try{  
      const res = await mainServer.get(`${props.path}/${pageNumber + 1}`);
      if (res.status == 200 && res.data.results.length) {
        setMovies(res.data.results)  
        setPage((count) => count + 1);
        setEndOfPage(false) 
        setStartOfPage(false)    
      } else {
        setEndOfPage(true)
      }
    } catch (error) {
      console.log("error")
      return <Navigate to='/' replace/>
    }
    
  },[props.path, pageNumber]);

  //decrease page
  const decrease = useCallback(async () => {
    if (pageNumber > 1){
      try{ 
        const res = await mainServer.get(`${props.path}/${pageNumber - 1}`);
        if (res.status == 200 && res.data.results.length) {
          setMovies(res.data.results)  
          setPage((count) => count - 1); 
          setEndOfPage(false)   
        }
      } catch (error) {
        console.log("error")
        return <Navigate to='/' replace/>
      }
    } else {
      setStartOfPage(true)
    }
  },[props.path, pageNumber]);

  return ( movies ? 
    <div>
      <div className="myScreen">
          {movies.map((movie) =>(
            <div key={movie['id']}>
              <Card movie={movie} page={pageNumber} sitePath={props.path} key={movie['id']}/> 
            </div>      
          ))}
      </div>
      <div >  
        <MyButton className="leftButton" isDisabled={startOfPage}  onClick={decrease}>
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