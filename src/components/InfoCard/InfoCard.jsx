import React, { useEffect, useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal/ProfileModal";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as UserApi from "../../api/UserRequests.js";
import { logout } from "../../actions/AuthActions";

const InfoCard = () => {
  const dispatch = useDispatch()
  const params = useParams();
  const [modalOpened, setModalOpened] = useState(false);
  const profileUserId = params.id;
  const [profileUser, setProfileUser] = useState({});
  const { user } = useSelector((state) => state.authReducer.authData);


  const handleLogOut = () => {
    dispatch(logout())
  }


  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user);
      } else {
        console.log("fetching")
        const profileUser = await UserApi.getUser(profileUserId);
        setProfileUser(profileUser);
        console.log(profileUser)
      }
    };
    fetchProfileUser();
  }, [user]);

  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Información Personal</h4>
        {user._id === profileUserId ? (
          <div>
            <UilPen
              width="2rem"
              height="1.2rem"
              onClick={() => setModalOpened(true)}
            />
            <ProfileModal
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
              data={user}
            />
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="info">
        {/* */}
        <div className="followStatus">
          <span className="profileCardText">
            <b>Estado </b>
          </span>
          <span>{profileUser.relationship}</span>
        </div>
        <hr />
      </div>
      <div className="info">
        <div className="followStatus">
          <span className="profileCardText">
            <b> Ubicación </b>
          </span>
          <span>{profileUser.livesIn}</span>
        </div>
        <hr />
      </div>
      <div className="info">
        <div className="followStatus">
          <span className="profileCardText">
            <b>Profesión </b>
          </span>
          <span>{profileUser.worksAt}</span>
        </div>
      </div>

      <button className="button logout-button" onClick={handleLogOut}>Cerrar Sesión</button>
    </div>
  );
};

export default InfoCard;
