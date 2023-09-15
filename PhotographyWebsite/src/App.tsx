import './App.css'
import axios from "axios";

import SideMenu from './Components/Menu/SideMenu';
import HomePage from './Components/HomePage/HomePage';
import MovieDetails from './Components/Detailes/MovieDetails';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TopRated from './Components/TopRated/TopRated';
import LogIn from './Components/LogIn/LogIn';
import Register from './Components/Register/Register';

axios.defaults.baseURL = import.meta.env.VITE_APP_API_KEY;
axios.defaults.withCredentials = true

function App() {
const verified = false
  return (
    <div>  
      <BrowserRouter>
        {verified ? 
          <SideMenu /> 
          : 
          null}
        <Routes>
          {verified ? (
            <>
              <Route path="/" element={<HomePage />} />
              <Route path="/topRated" element={<TopRated />} />
              <Route path="/details/:id" element={<MovieDetails />} />
            </>
          ) : (
            <>
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<LogIn />} />
            </>
          )}
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App