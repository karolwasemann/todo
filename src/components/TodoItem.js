import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const TodoItem = (props) => {
  return (
    <li key={props.todoObj.id}>
      {props.todoObj.title}
      <input
        type="checkbox"
        checked={props.todoObj.completed}
        onChange={() => {
          props.changeHandler(props.todoObj.id);
        }}
      />
      <button
        style={{
          cursor: "pointer",
          backgroundColor: "transparent",
          border: "none",
        }}
        onClick={() => props.deleteHandler(props.todoObj.id)}
      >
        <FontAwesomeIcon style={{ color: "red" }} icon={faTrashCan} />
      </button>
    </li>
  );
};

export default TodoItem;
