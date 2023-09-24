import './App.css'

import SideMenu from './Components/Menu/SideMenu';
import MovieDetails from './Components/Detailes/MovieDetails';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LogIn from './Components/LogIn/LogIn';
import Register from './Components/Register/Register';
import { useEffect, useState } from 'react';
import { mainServer } from './ApiLinks/ApiLink';
import MoviesList from './Components/MoviesList/MoviesList';

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
              <Route path="/top_rated" element={<MoviesList path={'/top_rated'}/>} />
              <Route path="/now_playing" element={<MoviesList path={'/now_playing'} />} />
              <Route path="/upcoming" element={<MoviesList path={'/upcoming'} />} />
              <Route path="/details/:id/:sitePath" element={<MovieDetails />} />
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