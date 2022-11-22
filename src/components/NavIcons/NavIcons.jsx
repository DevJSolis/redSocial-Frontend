import React from "react";

import Home from "../../assets/img/home.png";
import Noti from "../../assets/img/noti.png";
import Comment from "../../assets/img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

const NavIcons = () => {
  return (
    <div className="navIconsCard">
      <div className="navIcons">
        <Link to="../home">
          <img src={Home} alt="" />
        </Link>
      </div>
      <div className="navIcons">
        <Link to={`/profile`}>
          <UilSetting />
        </Link>
      </div>
      <div className="navIcons">
        <img src={Noti} alt="" />
      </div>
      <div className="navIcons">
        <Link to="../chat">
          <img src={Comment} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default NavIcons;
