function TodoItem({todo, onDelete, onToggle}) {
    return (
        <li>
            <input
                type="checkbox"
                checked={todo.done}
                onChange={() => onToggle(todo.id)}
            />
            <span className={todo.done ? "done" : ""}>{todo.text}</span>
            <button type="button" onClick={() => onDelete(todo.id)}>
                Delete
            </button>
        </li>
    );
}

export default TodoItem;