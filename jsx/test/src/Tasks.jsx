/*import React, { useState } from "react"

const Tasks = () => {
    const [tasks, setTasks ] = useState([])
    const [newInput, setNewInput] = useState("")

    const addTask = () => {
        if (newInput.trim()){
            setTasks([...tasks, newInput])
            setNewInput("")
        }
    }

    const removeTask = (index) => {
        const tasksRemoved = tasks.filter((_,i) => i !== index)
        setTasks(tasksRemoved)
    }
    
    return(
        <div>
            <h1>Tasks</h1>
            <input 
                type="text" 
                value={newInput}
                onChange ={(t) => setNewInput(t.target.value)}
            />
            <button onClick={addTask}>Add</button>
            <ul>
                {tasks.map((task,index) => 
                    <li key={index}>
                        {task}
                        <button onClick ={() => removeTask(index)}>Remove</button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Tasks

*/

import React, { useState } from "react"

const Tasks  = () => {
    const [Tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")

    const addTask = () =>{
        if(newTask.trim()){
            setTasks([...Tasks, newTask])
            setNewTask("")
        }
    }

    const removeTask = (index) =>{
        const taskRemoved = Tasks.filter((_,i) => i !== index)
        setTasks(taskRemoved)
    }

    return(
        <div>
            <input 
                type="text" 
                value={newTask}
                onChange={(t) => setNewTask(t.target.value)}
            />
            <button onClick={addTask}>Add</button>
            <ul>
                {Tasks.map((task, index)) => (

                )}
            </ul>
        </div>
    )
}

