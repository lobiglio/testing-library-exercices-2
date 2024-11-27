const TodoList = ({ items, onClick }) => (
  <ul className="mt-3">
    {items.map((item) => (
      <li
        key={item.id}
        className={`${item.done && "done"}`}
        onClick={() => onClick(item.id)}
      >
        {item.value}
      </li>
    ))}
  </ul>
);

export default TodoList;
