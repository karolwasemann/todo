import React, { useState } from "react";

const TodoInput = (props) => {
  const [inputText, setInputText] = useState("");
  const changeHandeler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputText.length !== 0) {
      props.addHandler(inputText);
    }
    setInputText("");
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Todo entry..."
        value={inputText}
        onChange={changeHandeler}
      />
      <button>➕</button>
    </form>
  );
};

export default TodoInput;
