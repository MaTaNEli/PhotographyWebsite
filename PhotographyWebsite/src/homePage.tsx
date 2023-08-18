import data from "./Utils/Movie";
import Card from "./UI/Card";

const HomePage = () => {

  return (
  <div>
    {data.map((movie,key) => (
      <Card  movie={movie} key={key} id={key}/>        
    ))}
  </div>
  )
}

export default HomePage;