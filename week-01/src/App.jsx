

function App() {
const name = "Leonie";
const todos = ["Buy oat milk", "Send letter to Frida", "Sign up for DJ Workshop"];

return (
  <>
  <h1>{name}'s To-Do</h1>
  <p>Things I need to get done</p>
  <ul>
    { todos.map(n => <TodoItem text={n} key={n}/>) }
  </ul>
  </>
)
}

function TodoItem( {text} ){
  return(
    <li>{text}</li>
  )
}

export default App