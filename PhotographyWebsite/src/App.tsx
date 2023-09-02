import './App.css'

import axios from "axios";

import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './HomePage/HomePage';
import MovieDetails from './Detailes/MovieDetails';

axios.defaults.baseURL = import.meta.env.VITE_APP_API_KEY;
axios.defaults.withCredentials = true

function App() {

  return (
    <div>  
      <BrowserRouter>
        <header>
          <Link className='text' to="/">Home Page</Link>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
