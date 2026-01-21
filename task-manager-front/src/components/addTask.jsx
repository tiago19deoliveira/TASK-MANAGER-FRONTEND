import CustomInput from "./customInput";
import CustomButton from "./customButton";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import axios from "axios";
import "./addTask.scss";

const AddTask = ({ fetchTasks }) => {
  const [task, setTask] = useState("");
  const onChange = (e) => {
    setTask(e.target.value);
  };

  const handleTaskAddition = async () => {
    try {
      // if (task.length === 0) {
      //   return toast.error("Não foi possível adicionar uma tarefa");
      // }

      await axios.post("http://localhost:8000/tasks", {
        description: task,
        isCompleted: false,
      });
      await fetchTasks();
      setTask("");
    } catch (error) {
      console.log(error, ": erro de chamada de tarefas");
    }
  };

  return (
    <div className="add-task-container">
      <CustomInput label="Adicionar..." value={task} onChange={onChange} />
      <CustomButton onClick={handleTaskAddition}>
        <FaPlus size={14} color="#ffff" />
      </CustomButton>
    </div>
  );
};

export default AddTask;
