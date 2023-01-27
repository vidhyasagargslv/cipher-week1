
  import React, { useEffect, useState } from "react"; 
  import { tasks } from "../apis/testApi";
  const TaskScreen= () => {
        const [allTasks , setTasks] = usestate ([]);
    useEffect (() => {
      console.log("TaskScreen Mounted");
    }, []);
    return tasks.map((task, index) => (
      <div key = {index}>
        <h1>
            (task.taskNumber) {task.taskName}
        </h1>
        <p>{task.taskDescription}</p>
      </div>
    ));
  };
  export default TaskScreen;