import "./CircularAvatar.css";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import "bootstrap/dist/css/bootstrap.min.css";

export const CircularAvatar = ({ user, src, covid }) => {
  return (
      <>
      <div id='circle'>
        <Stack id="user" gap={0}>
          <Image id="avatar" src={src} roundedCircle/>
          <p id = "userName">{user}</p>
        </Stack>
      </div>
    </>
  );
};
