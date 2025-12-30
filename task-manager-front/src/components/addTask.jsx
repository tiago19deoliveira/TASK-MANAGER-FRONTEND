import CustomInput from "./customInput";
import "./addTask.scss";
import { useState } from "react";

const AddTask = () => {
  const [task, setTask] = useState("");
  const onChange = (e) => {
    setTask(e.task.value);
  };

  return (
    <div className="add-task-container">
      <CustomInput label="Adicionar..." value={task} onChange={onChange} />
    </div>
  );
};

export default AddTask;
