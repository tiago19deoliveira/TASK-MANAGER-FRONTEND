const TaskItem = ({ task }) => {
  return (
    <>
      <h1>{task._id}</h1>;
      <h1>{task.isCompleted ? "completo" : "incompleto"}</h1>;
    </>
  );
};

export default TaskItem;
