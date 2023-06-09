import { useState } from "react";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler(params) {}

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="action">
        <button className="btn" onClick={deleteHandler()}>
          Delete
        </button>
      </div>
    </div>
  );
}
export default Todo;

//props: cho phép truyền dữ liệu từ bên ngoài
