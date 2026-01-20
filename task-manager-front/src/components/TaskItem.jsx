import "./taskitem.scss";

import { AiFillDelete } from "react-icons/ai";

const TaskItem = ({ task }) => {
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
        <AiFillDelete size={18} color="red" />
      </div>
    </div>
  );
};

export default TaskItem;
