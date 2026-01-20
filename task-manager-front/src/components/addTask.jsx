import CustomInput from "./customInput";
import CustomButton from "./customButton";
import "./addTask.scss";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import axios from "axios";

const AddTask = () => {
  const [task, setTask] = useState("");
  const onChange = (e) => {
    setTask(e.task.value);
  };

  const handleTaskAddition = async () => {
    try {
      const response = axios.post();
    } catch (error) {}
  };

  return (
    <div className="add-task-container">
      <CustomInput label="Adicionar..." value={task} onChange={onChange} />
      <CustomButton>
        <FaPlus size={14} color="#ffff" />
      </CustomButton>
    </div>
  );
};

export default AddTask;
