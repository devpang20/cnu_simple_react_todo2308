import { useState } from "react"
import TodoForm from "./components/TodoForm"
import TodoHeader from "./components/TodoHeader"
import TodoList from "./components/TodoList"

function App() {

  // 로직

  const [todos, setTodos] = useState([
    {
      text: "할일1",
    },
    {
      text: "할일2",
    },
    {
      text: "할일3",
    }, 
  ])

  const onInsert = (text) => {
    setTodos(
      todos.concat([
        {
          text: text,
        }
    ])
    )
  }

  // view
  return (
    <div>
      <TodoHeader />
      <TodoForm onInsert={onInsert}/>
      <TodoList todos={todos} />
    </div>
  )
}

export default App
