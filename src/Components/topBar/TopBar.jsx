import { createContext } from "react";
import "./topBar.scss";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topContainer">
        <div className="left">
          <img
            src="https://scontent.ftbs3-1.fna.fbcdn.net/v/t1.6435-9/138931479_2834694220189816_2559010575676225937_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=be3454&_nc_ohc=NBWtT8QGym0AX9afJ9J&_nc_ht=scontent.ftbs3-1.fna&oh=00_AfBIKMOFqEJY_yuA5wtvuGg4R7sd7c8VCA9KNoaP0zkJcg&oe=6571CFF9"
            alt=""
          />

          <span> Sole Trans</span>
        </div>

        <div className="middle">
          <LocalShippingOutlinedIcon className="car" />
          <span> სახმელეთო გადაზიდვები </span>
        </div>

        <div className="right">
          <ul className="topUlList">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Offers</li>
            <li>Partners</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
