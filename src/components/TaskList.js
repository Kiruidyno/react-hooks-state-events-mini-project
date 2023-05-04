import React from "react";
import Task from "./Task";


function TaskList({ tasks, removeTask }) {
  return (
    <div className="tasks">
      {tasks !== undefined &&
        tasks.map((task) => {
          return <Task task={task} key={task.text} removeTask={removeTask} />;
        })}
    </div>
  );
}

export default TaskList;
