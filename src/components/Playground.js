import React, { useState } from "react";

const Playground = (props) => {
  const [someStr, setSomeStr] = useState("default ;)");
  const [todosArr, setTodosArr] = useState(["aufraumen", "zocken"]);
  return (
    <>
      <div className="add-stuff">
        <h2>Todos State</h2>
        <button
          onClick={() => {
            const copiedTodosArr = [...todosArr];
            copiedTodosArr[copiedTodosArr.length - 1] = "lesen";
            setTodosArr(copiedTodosArr);
          }}
        >
          Change Playground-Todos
        </button>
        <br />
        <p> Mein Array mit Playground-Todos:{todosArr.join(", ")}</p>
        <br />
        <br />
        <button
          onClick={() => {
            setSomeStr("New string");
          }}
        >
          Change someStr
        </button>
        <p>{someStr}</p>
      </div>
    </>
  );
};

export default Playground;
