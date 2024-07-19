import { useState } from "react"
import { Task } from "./types";

type FormProps ={
    addTask:(task:Task)=>void;
}

function Form({addTask}:FormProps) {
    const [text, setText] = useState('');

    function handleSubmit(evt: React.ChangeEvent<HTMLFormElement>) {
        evt.preventDefault();
        if(!text){
            alert('Please enter a task');
            return;
        }
        //console.log(text);
        addTask({
            id: new Date().getTime().toString(),
            description: text,
            isCompleted: false,
        })        
        setText('');
    }
  return (
    <form className="form task-form" onSubmit={handleSubmit}>
    <input type="text" className="form-input" value={text} onChange={(evt)=>setText(evt.target.value)}/>
    <button className="btn" type="submit">add task</button>
    </form>
  )
}

export default Form