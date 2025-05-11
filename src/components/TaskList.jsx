import React from 'react';
import TaskItem from './TaskItem';
const TaskList = ({ tasks, onDelete, onToggle, onEdit }) => {
  if (!tasks.length) return <p>No tasks found.</p>;
  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};
export default TaskList;






