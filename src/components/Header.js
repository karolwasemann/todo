import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  return (
    <header>
      <h1>
        My todos
        <FontAwesomeIcon
          style={{ color: "yellow", marginLeft: "1.5rem" }}
          icon={faCode}
        />
      </h1>
    </header>
  );
};

export default Header;
