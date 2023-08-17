function TodoList({todos, onDelete}) {
    return ( 
        <div>
            {todos.map(todo => 
                <div key={todo.id}>
                    {todo.id}<span>{todo.text}</span><button onClick={() => onDelete(todo.id)}>X</button>
                </div>
            )}
        </div>
    );
}

export default TodoList;