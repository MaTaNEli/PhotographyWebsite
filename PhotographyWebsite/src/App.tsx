import './App.css'
import axios from "axios";

import SideMenu from './Components/Menu/SideMenu';
import HomePage from './Components/HomePage/HomePage';
import MovieDetails from './Components/Detailes/MovieDetails';
import {BrowserRouter, Route, Routes} from "react-router-dom";

axios.defaults.baseURL = import.meta.env.VITE_APP_API_KEY;
axios.defaults.withCredentials = true

function App() {

  return (
    <div>  
      <BrowserRouter>
          <SideMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App