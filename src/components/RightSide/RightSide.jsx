import React, { useState } from "react";
import "./RightSide.css";

import NavIcons from "../NavIcons/NavIcons";
const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="RightSide">
      {/* Side Navbar */}
      <NavIcons />
    </div>
  );
};

export default RightSide;
