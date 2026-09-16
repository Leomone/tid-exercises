import NewTodoForm from "./NewTodoForm.jsx";
import TodoItem from "./TodoItem.jsx";
import {useEffect, useState} from "react";

function ToDoList({firstName, todos}) {

    function loadTodos() {
        const savedTodos = localStorage.getItem("todos");

        if (savedTodos) {
            return JSON.parse(savedTodos);
        }

        return todos;
    }

    const [todoList, setTodoList] = useState(loadTodos);

    useEffect(() => {
        const todosAsText = JSON.stringify(todoList);
        localStorage.setItem("todos", todosAsText);
    }, [todoList]);

    function handleAdd(text) {
        const newTodo = {
            id: crypto.randomUUID(),
            text: text,
            done: false
        };
        setTodoList([...todoList, newTodo]);
    }

    function handleDelete(id) {
        const remainingTodos = todoList.filter(
            (todo) => todo.id !== id
        );

        setTodoList(remainingTodos);
    }

    function handleToggle(id) {
        const updatedTodos = todoList.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    done: !todo.done,
                };
            }
            return todo;
        });
        setTodoList(updatedTodos);
    }

    return (
        <>
            <h1>To Do List for {firstName}</h1>
            {todoList.length === 0 ? (
                <p>Nothing to do. Enjoy your free time!</p>
            ) : (
                <ul>
                    {todoList.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onDelete={handleDelete}
                            onToggle={handleToggle}
                        />
                    ))}
                </ul>
            )}

            <NewTodoForm onAdd={handleAdd}/>
        </>
    );
}

export default ToDoList;