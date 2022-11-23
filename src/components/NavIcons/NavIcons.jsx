import React from "react";

import Home from "../../assets/img/home.png";
import Noti from "../../assets/img/noti.png";
import Comment from "../../assets/img/comment.png";
import Logout from "../../assets/img/Logout.png"
import ProfileIcon from "../../assets/img/profilemenu.png"
import { UilSetting } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import { logout } from "../../actions/AuthActions";
import { useDispatch, useSelector } from "react-redux";

const NavIcons = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const handleLogOut = ()=> {
    dispatch(logout())
  }
  return (
    <div className="navIconsCard">
      <div className="navIcons">
        <Link to="../home">
          <img src={Home} alt="" />
        </Link>
      </div>
      <div className="navIcons">
      <Link to={`/profile/${user._id}`}>
           <img src={ProfileIcon} alt="" />
        </Link>
        </div>
      <div className="navIcons">
        <Link to="../chat">
          <img src={Comment} alt="" />
        </Link>
      </div>
      <div className="navIcons">
         <img src={Logout} alt=""onClick={handleLogOut} />
      </div>
    </div>
  );
};

export default NavIcons;
