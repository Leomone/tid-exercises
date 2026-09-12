import "./App.css";
import ToDoList from "./ToDoList.jsx";

function App() {
    const mainToDoList = [
        { id: "todo-1", text: "Buy Oat milk", done: false },
        { id: "todo-2", text: "Go to the Gym", done: false },
    ];

    return (
        <>
            <ToDoList firstName={"Leonie"} todos={mainToDoList}/>
        </>
    );
}

export default App;
