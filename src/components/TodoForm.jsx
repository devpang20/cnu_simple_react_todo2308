import { useState } from "react";

function TodoForm({onInsert}) {
    const [text, setText] = useState("");

    const onCustomChange = (e) => {
        setText(e.target.value)
    }

    const onCustomSubmit = (e) => {
        e.preventDefault();
        onInsert(text);
        setText("");
    }

    return ( 
        <form onSubmit={onCustomSubmit}>
            <input 
                type="text" 
                value={text}
                onChange={onCustomChange}
            />
            <button type="submit">입력</button>
        </form>
    );
}

export default TodoForm;