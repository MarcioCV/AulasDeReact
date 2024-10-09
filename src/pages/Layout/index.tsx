import { Link, Outlet } from "react-router-dom";
import "./style.css";
import BookIcon from "../../assets/book.svg";
import HomeIcon from "../../assets/home_filled.svg";
import ContactsIcon from "../../assets/Group.svg";
import { UserBanner } from "../../components/UserBanner";
import userPic from "../../assets/profile.webp";

export function Layout() {
  return (
    <div className="general">
      <nav>
        <UserBanner photo={userPic} name="Angelina Jolie" />
        <Link to="/" className="navItem">
          <img src={HomeIcon} alt="" />
          Home
        </Link>
        <Link to="/profile" className="navItem">
          <img src={BookIcon} alt="" />
          Profile
        </Link>
        <Link to="/login" className="navItem">
          <img src={ContactsIcon} alt="" />
          Login
        </Link>
        <Link to="/sales" className="navItem">
          <img src={ContactsIcon} alt="" />
          Sales
        </Link>
      </nav>
      <div className="homeContainer">
        <header>
          <input type="text" placeholder="Search anything..." />
        </header>
        <div className="boxContainer">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
