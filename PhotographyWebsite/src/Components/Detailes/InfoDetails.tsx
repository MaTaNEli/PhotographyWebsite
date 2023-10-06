import {mainServer} from '../../ApiLinks/ApiLink'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './InfoDetails.css'
import MovieDetails from './MovieDetails';
import TvShowDetails from './TvShowDetails';

const InfoDetails = () => {
  const [info, setInfo] = useState();
  const { id, sitePath, tvPath } = useParams();
  const genre = tvPath? 'tvShow' : 'Movies'

  useEffect(() => {
    (async () => {
      try{
        const res = await mainServer.get(`details/${id}/${genre}`);
        
        if (res.status == 200) {
          setInfo(res.data)       
        }
      } catch (error) {
        console.log(error)
      }
    })();
  }, [id, genre])

  return info && sitePath ? genre == 'tvShow' ? 
    <MovieDetails movie={info} sitePath={sitePath} /> : 
    <TvShowDetails show={info} sitePath={sitePath} />
    : null
}

export default InfoDetails;
