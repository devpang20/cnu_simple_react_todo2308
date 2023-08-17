import { useState } from "react"
import TodoForm from "./components/TodoForm"
import TodoHeader from "./components/TodoHeader"
import TodoList from "./components/TodoList"

function App() {

  // 데이터 로직
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "할일1",
    },
    {
      id: 2,
      text: "할일2",
    },
    {
      id: 3,
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

  // 할일 삭제
  const onDelete = (id) => {
    const nextState = todos.filter(todo => todo.id !== id)
    setTodos(nextState)
  }

  // view
  return (
    <div>
      <TodoHeader />
      <TodoForm onInsert={onInsert}/>
      <TodoList todos={todos} onDelete={onDelete} />
    </div>
  )
}

export default App
