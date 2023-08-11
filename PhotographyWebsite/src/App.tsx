import './App.css'
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './homePage';

function App() {
  return (
    <div>  
      <BrowserRouter>
        <header>
          <Link to="/">Photography!</Link>
        </header>
        <h1>Welcome to Photography</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
