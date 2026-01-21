import axios from "axios";
import "./taskitem.scss";

import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";

const TaskItem = ({ task }) => {
  const handleDeleteTask = async () => {
    try {
      await axios.delete(`http://localhost:8000/tasks/${task._id}`);
    } catch (error) {
      toast.error("erro na requisição para deletar tarefa");
      console.log(error, "erro na api");
    }
  };

  return (
    <div className="task-item-container">
      <div className="task-description">
        <label
          className={
            task.isCompleted
              ? "checkbox-container-completed"
              : "checkox-container"
          }
        >
          {task.description}
          <input type="checkbox" defaultChecked={task.isCompleted} />
          <span
            className={task.isCompleted ? "checkmark completed" : "checkmark"}
          ></span>
        </label>
      </div>
      <div className="delete">
        <AiFillDelete size={18} color="red" onClick={handleDeleteTask} />
      </div>
    </div>
  );
};

export default TaskItem;
