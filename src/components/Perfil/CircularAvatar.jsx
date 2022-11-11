import "./CircularAvatar.css";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import "bootstrap/dist/css/bootstrap.min.css";

export const CircularAvatar = ({ user, src, covid }) => {
  return (
    <div className="circle">
      <Stack className="user" gap={0}>
        <Image className="avatar" src={src} roundedCircle/>
        <p className= "userName">{user}</p>
      </Stack>
    </div>

  );
};
