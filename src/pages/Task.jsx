import React, { useState } from 'react';
import TaskEditor from '../components/TaskEditor';
import TaskList from '../components/TaskList';
import Filter from '../components/Filter';


const Tasks = () => {
  const [tasks, setTasks] = useState([]);//hold my task
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');//search text

  const addOrUpdateTask = (task) => {
    setTasks((prev) => {
      const exists = prev.find(t => t.id === task.id);
      return exists
        ? prev.map(t => t.id === task.id ? task : t)
        : [...prev, task];
    });
  };

  const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id));

  const toggleStatus = (id) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const filtered = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  }).filter(task => task.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="task-page">
      <h2>Manage Your Tasks</h2>
      <TaskEditor onSave={addOrUpdateTask} />
      <Filter setFilter={setFilter} setSearch={setSearch} />
      <TaskList
        tasks={filtered}
        onDelete={deleteTask}
        onToggle={toggleStatus}
        onEdit={addOrUpdateTask}
      />
    </div>
  );
};

export default Tasks;
