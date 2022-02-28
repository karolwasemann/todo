import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
//component file
import TodoContainer from "./components/TodoContainer";

ReactDOM.render(
  <StrictMode>
    <TodoContainer />
  </StrictMode>,
  document.getElementById("root")
);
