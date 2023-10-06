import './SideMenu.css';

import { Link } from "react-router-dom";

interface Items {
  title: string;
  path: string;
  icon: JSX.Element;
  className: string;
}

interface List {
  list: Array<Items>,
  title: string
}

const MoviesMenu = (props : List) =>{
  return <div>
    <h2>{props.title}</h2>
    {props.list.map((item, index) => {
      return (
        <li key={index} className={item.className}>
          <Link to={item.path}>
            {item.icon}
            <span>{item.title}</span>
          </Link>
        </li>
      )
    })}
  </div>
}

export default MoviesMenu;