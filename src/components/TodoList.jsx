function TodoList({todos, onDelete, onToggle}) {
    return ( 
        <div>
            {todos.map(todo => 
                <div key={todo.id} style={{ textDecoration: todo.checked ? "line-through" : "none" }}>
                    <input 
                        type="checkbox"
                        checked={todo.checked}
                        onChange={() => onToggle(todo.id)} 
                    />
                    {todo.id}
                    <span>{todo.text}</span>
                    <button onClick={() => onDelete(todo.id)}>X</button>
                </div>
            )}
        </div>
    );
}

export default TodoList;