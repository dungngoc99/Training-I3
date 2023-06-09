import Todo from "./components/Todo";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";

function App() {
  return (
    <>
      <div>
        <h1>My Todos</h1>
        <Todo text="Learn" />
        <Todo text="Master" />
        <Todo text="blabla" />
        <Modal />
        <Backdrop />
      </div>
    </>
  );
}

export default App;
