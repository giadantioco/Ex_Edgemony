// import { useState } from "react";
// import "./App.css";
import { useState } from "react";
import styles from "./App.module.css";
import addIcon from "./assets/icons/add_circle_outline.svg";
import deleteIcon from "./assets/icons/delete.png";

const initialTodos = [
  {
    id: 1,
    title: "fare la spesa",
  },
  {
    id: 2,
    title: "compra terriccio",
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.length) return;
    setTodos([...todos, { id: self.crypto.randomUUID(), title: input }]);
    setInput("");
    console.log("dopo:", todos);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleDelete = (e) => {
    const newList = todos.filter((todo) => todo.id !== e.target.id);
    setTodos(newList);
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <header>
          <h1>To-do List</h1>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              type="text"
              placeholder="Create a task"
              value={input}
              onChange={handleChange}
            />
            <div className={styles.inputBtnContainer}>
              <button className={styles.inputBtn} onClick={addTodo}>
                <img src={addIcon} alt="icon add" />
              </button>
            </div>
          </div>
        </header>
        <main className={styles.listDisplay}>
          <div className={styles.listContainer}>
            <ul>
              {todos.map((todo) => {
                return (
                  <li className={styles.list} key={todo.id}>
                    {todo.title}{" "}
                    <button id={todo.id} onClick={handleDelete}>
                      <img src={deleteIcon} alt="delete icon" />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
