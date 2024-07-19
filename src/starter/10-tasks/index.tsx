import { useEffect, useState } from "react";
import {type Task } from "./types";
import Form from "./Form";
import List from "./List";

function loadTasks():Task[]{
const storedTasks = localStorage.getItem("tasks");
return storedTasks? JSON.parse(storedTasks):[];
};

function updateStorage(tasks: Task[]):void{
  localStorage.setItem("tasks", JSON.stringify(tasks));
};


function Component() {
  const [tasks, setTasks] = useState<Task[]>(()=>loadTasks());

  useEffect(() => {
    updateStorage(tasks);
  }, [tasks]);

  function addTask(task: Task):void{
      setTasks([...tasks, task])
  }

  function toggleTask({id}:{id:string}): void{
      setTasks(tasks.map(task => task.id === id? {...task, isCompleted:!task.isCompleted}: task));
  }

  return (
    <section>
      <Form addTask={addTask}/>
      <List tasks={tasks} toggleTask={toggleTask}/>
    </section>
  );
}
export default Component;
