import { useRef, useState } from "react"
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

  let lastId = useRef(todos[todos.length -1].id)

  const onInsert = (text) => {
    setTodos(
      todos.concat([
        {
          id: lastId.current + 1,
          text: text,
        }
      ])
    )
    lastId.current++;
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
      <TodoForm onInsert={onInsert} />
      <TodoList todos={todos} onDelete={onDelete} />
    </div>
  )
}

export default App
