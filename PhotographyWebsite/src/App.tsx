import './App.css'
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './homePage';
import MovieDetails from './MovieDetails';

function App() {
  return (
    <div>  
      <BrowserRouter>
        <header>
          <Link to="/">Photography!</Link>
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
