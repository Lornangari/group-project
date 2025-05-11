import React, { useState } from 'react';
const TaskEditor = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [deadline, setDeadline] = useState('');
  const [priority, setPriority] = useState('Medium');
  const handleSubmit = () => {
    if (title.trim()) {
      onSave({
        id: Date.now(),
        title,
        description: desc,
        deadline,
        priority,
        completed: false,
      });
      setTitle('');
      setDesc('');
      setDeadline('');
      setPriority('Medium');
    }
  };
  return (
    <div className="editor">
      <input type="text" placeholder="Task Title" value={title} onChange={e => setTitle(e.target.value)} />
      <textarea placeholder="Description" value={desc} onChange={e => setDesc(e.target.value)} />
      <input type="date" value={deadline} onChange={e => setDeadline(e.target.value)} />
      <select value={priority} onChange={e => setPriority(e.target.value)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
};
export default TaskEditor;