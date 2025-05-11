const TaskItem = ({ task, onDelete, onToggle }) => (
    <div className={`task-item ${task.completed ? 'done' : ''}`}>
      <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>Due: {task.deadline}</p>
        <span className={`badge ${task.priority.toLowerCase()}`}>{task.priority}</span>
        <span className={`status ${task.completed ? 'green' : 'orange'}`}>
          {task.completed ? 'Completed' : 'Pending'}
        </span>
      </div>
      <div className="actions">
        <button onClick={() => onToggle(task.id)}>
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
  export default TaskItem;
