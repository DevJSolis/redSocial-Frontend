import { useState } from "react";
import { CircularAvatar } from "./CircularAvatar";
import "./FriendsCont.css";
import Stack from "react-bootstrap/Stack";
import "bootstrap/dist/css/bootstrap.min.css";

function FriendsCont({ dataFriends, dark }) {
  const [data, setData] = useState(0);
  const [search, setSearch] = useState(0);

  const searchData = () => {
    setSearch((search) => {});
  };

  const friendsRender = () => {
    setData((data) => {});
  };

  return (
    <>
      <div id="container">

        <Stack gap={0}>
          <Stack direction="horizontal">
            <p id="friends">AMIGOS</p>
            <input id="search" />
        </Stack>
          <Stack direction="horizontal" gap={2}>
            <CircularAvatar
              user="Joshua"
              src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
            />
            <CircularAvatar
              user="Ema"
              src="https://image.shutterstock.com/image-photo/profile-picture-smiling-millennial-asian-260nw-1836020740.jpg"
            />
            <CircularAvatar
              user="Melanie"
              src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <CircularAvatar
              user="Melanie"
              src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
          </Stack>
        </Stack>
      </div>
    </>
  );
}

export default FriendsCont;
