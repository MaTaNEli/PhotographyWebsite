import * as AiIcons from 'react-icons/ai'
//import * as IoIcons from 'react-icons/io'
//import * as FaIcons from 'react-icons/fa'

export const SideBarMoviesData = [
  {
    title: 'Home',
    path: '/popular',
    icon: <AiIcons.AiFillHome/>,
    className: 'nav-text'
  },
  {
    title: 'Now Playing',
    path: '/nowPlaying',
    icon: <AiIcons.AiOutlinePlayCircle/>,
    className: 'nav-text'
  },
  {
    title: 'Top Rated Movies',
    path: '/topRated',
    icon: <AiIcons.AiOutlinePlayCircle/>,
    className: 'nav-text'
  },
  {
    title: 'UpComing',
    path: '/upComing',
    icon: <AiIcons.AiOutlinePlayCircle/>,
    className: 'nav-text'
  }
]


export const SideBarTvShowData = [
  {
    title: 'Popular',
    path: '/tvShow/popular',
    icon: <AiIcons.AiOutlinePlayCircle/>,
    className: 'nav-text'
  },
  {
    title: 'Top Rated',
    path: '/tvShow/topRated',
    icon: <AiIcons.AiOutlinePlayCircle/>,
    className: 'nav-text'
  },
  {
    title: 'On The Air',
    path: '/tvShow/on_the_air',
    icon: <AiIcons.AiOutlinePlayCircle/>,
    className: 'nav-text'
  },
  {
    title: 'Airing Today',
    path: '/tvShow/airing_today',
    icon: <AiIcons.AiOutlinePlayCircle/>,
    className: 'nav-text'
  }
]