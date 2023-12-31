import './App.css'

import SideMenu from './Components/Menu/SideMenu';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LogIn from './Components/LogIn/LogIn';
import Register from './Components/Register/Register';
import { useEffect, useState } from 'react';
import { mainServer } from './ApiLinks/ApiLink';
import MoviesList from './Components/MoviesList/MoviesList';
import InfoDetails from './Components/Detailes/InfoDetails';


function App() {
  const [verified, setVerified] = useState(false)
  const [userName, setUserName] = useState ('')
  useEffect(() => {
    (async () => {
      try{
        const res = await mainServer.get('/checkValidated');

        if (res.status == 200) {
          setUserName(res.data)
          setVerified(true)
        }
      } catch (error) {
        console.log(error)
      }
    })();
  }, [])

  return (
    <div>  
      <BrowserRouter>
        {verified ? 
          <SideMenu userName={userName}/> 
          : 
          null}
        <Routes>
          {verified ? (
            <>
              <Route path="/popular" element={<MoviesList path={'/popular'} />} />
              <Route path="/tvShow/popular" element={<MoviesList path={'/tvShow/popular'} />} />
              <Route path="/tvShow/on_the_air" element={<MoviesList path={'/tvShow/on_the_air'} />} />
              <Route path="/tvShow/topRated" element={<MoviesList path={'/tvShow/topRated'} />} />
              <Route path="/tvShow/airing_today" element={<MoviesList path={'/tvShow/airing_today'} />} />
              <Route path="/topRated" element={<MoviesList path={'/topRated'}/>} />
              <Route path="/nowPlaying" element={<MoviesList path={'/nowPlaying'} />} />
              <Route path="/upComing" element={<MoviesList path={'/upComing'} />} />
              <Route path="/details/:id/:sitePath/:tvPath?" element={<InfoDetails />} />
              <Route path="/tvShow/" element={<MoviesList path={'/tvShow/popular'} />} />
              <Route path="/" element={<MoviesList path={'/popular'} />} />
            </>
          ) : (
            <>
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<LogIn />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App