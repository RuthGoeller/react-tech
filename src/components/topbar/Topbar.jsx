import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  return (
    <div className="top">
      <div className="topLeft">
      <Link className="link" to="/">
      <img src="https://techsur.solutions/wp-content/uploads/2021/01/Techsur-Logo.png" alt=""/>
      </Link>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="topListItem">Services</li>
          <li className="topListItem">Blog</li>
          <li className="topListItem">Contracts</li>
          <li className="topListItem">About</li>
          <li className="topListItem">Career</li>
        </ul>
      </div>
      <div className="topRight">
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
