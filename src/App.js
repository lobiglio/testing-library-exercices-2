import { useState, useMemo, useRef } from "react";

import TodoList from "./components/TodoList";
import TrashButton from "./components/TrashButton";

import "./App.css";

function App() {
  const inputRef = useRef();
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);

  const uid = () => Math.floor(Math.random() * 900);
  const handleOnChange = (e) => setValue(e.target.value);
  const handleOnClick = (id) => {
    const updated = items.map((item) => {
      return item.id === id ? { ...item, done: !item.done } : item;
    });
    setItems(updated);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      return false;
    }
    setItems([...items, { id: uid(), value, done: false }]);
    inputRef.current.value = "";
    setValue(null);
  };
  const remove = () => {
    const filtered = items.filter((item) => !item.done);
    setItems(filtered);
  };

  const hasTodoDone = useMemo(() => {
    return items.find((item) => item.done);
  }, [items]);

  return (
    <div className="App">
      <h1 className="mb-2">Ma Todo Liste</h1>
      <form
        data-testid="form"
        onSubmit={handleOnSubmit}
        style={{ display: "flex" }}
      >
        <input
          ref={inputRef}
          className="form-control"
          type="text"
          name="inputTodo"
          onChange={handleOnChange}
        />
      </form>
      <TodoList items={items} onClick={handleOnClick} />
      <TrashButton isVisible={hasTodoDone} remove={remove} />
    </div>
  );
}

export default App;
