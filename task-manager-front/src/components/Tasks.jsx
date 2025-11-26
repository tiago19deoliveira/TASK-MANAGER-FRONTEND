/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/tasks");
      setTasks(data);
      console.log(data, " resposta do back");
    } catch (error) {
      console.log(error, "deu erro");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <div className="tasks-container">
      <h2>Minhas Tarefas</h2>
      <div className="last-tasks">
        <h3>Últimas Tarefas</h3>
        <div className="tasks-list">
          {tasks
            .filter((tasks) => tasks.isCompleted === false)
            .map((lastTask) => (
              <p>{lastTask.description}</p>
            ))}
        </div>
      </div>
      <div className="completed-tasks">
        <h3>Tarefas Concluídas</h3>
        <div className="tasks-list">
          {tasks
            .filter((tasks) => tasks.isCompleted === true)
            .map((taskCompleted) => (
              <p>{taskCompleted.description}</p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
