import logo from "../assets/img/logo.png"
import user from "../assets/img/user.jpg"
import { ReactComponent as SearchIcon } from '../assets/img/SVG/magnifying-glass.svg';
import { ReactComponent as BookmarkIcon } from '../assets/img/SVG/bookmark.svg';
import { ReactComponent as ChatIcon } from '../assets/img/SVG/chat.svg';

const Home = () => {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <img src={logo} alt="trillo logo" className="logo" />
        <form action="#" className="search">
          <input type="text" className="search__input" placeholder="Search hotels" />
          <button className="search__button">
          <SearchIcon className="search__icon" />
          </button>
        </form>
        <nav className="user-nav">
          <div className="user-nav__icon-box">
            <BookmarkIcon className="user-nav__icon" />
            <span className="user-nav__notification">7</span>
          </div>
          <div className="user-nav__icon-box">
            <ChatIcon className="user-nav__icon" />
            <span className="user-nav__notification">13</span>
          </div>
          <div className="user-nav__user">
            <img src={user} alt="user" className="user-nav__user-photo" />
            <span className="user-nav__user-name">Kamrujjaman</span>
          </div>
        </nav>
      </header>
      {/* Content */}
      <div className="content">
        <nav className="sidebar">Navigation</nav>
        <main className="hotel-view">Hotel View</main>
      </div>
    </div>
  );
};

export default Home;
