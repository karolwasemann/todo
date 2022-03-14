// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCode } from "@fortawesome/free-solid-svg-icons";

// const Header = (props) => {
//   return (
//     <header>
//       <h1>
//         My todos
//         <FontAwesomeIcon
//           style={{ color: "yellow", marginLeft: "1.5rem" }}
//           icon={faCode}
//         />
//       </h1>
//     </header>
//   );
// };

// export default Header;

// import ausnahsmweise bewusst weggelassen
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <h1>
        <NavLink to="/">
          My todos
          <FontAwesomeIcon
            style={{ color: "yellow", marginLeft: "1.5rem" }}
            icon={faCode}
          />
        </NavLink>
      </h1>
      <nav>
        <NavLink to="/">Startseite</NavLink>
        <NavLink to="/todo-app">Todo App</NavLink>
        <NavLink to="/contact">Kontakt</NavLink>
        <NavLink to="/about">Über uns</NavLink>
      </nav>
    </header>
  );
}

export default Header;
