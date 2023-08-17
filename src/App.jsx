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
      checked: true
    },
    {
      id: 2,
      text: "할일2",
      checked: true
    },
    {
      id: 3,
      text: "할일3",
      checked: false
    }, 
  ])

  let lastId = useRef(todos[todos.length -1].id)

  // 할일 등록
  const onInsert = (text) => {
    setTodos(
      todos.concat([
        {
          id: lastId.current + 1,
          text: text,
          checked: false
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

  // 할일 여부 체크
  const onToggle = (id) => {
    const nextState = todos.map(todo => 
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    )
    setTodos(nextState)
  }

  // view
  return (
    <div>
      <TodoHeader />
      <TodoForm onInsert={onInsert} />
      <TodoList 
        todos={todos} 
        onDelete={onDelete} 
        onToggle={onToggle} 
      />
    </div>
  )
}

export default App
