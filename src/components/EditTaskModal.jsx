import React, { useState } from 'react';

const EditTaskModal = ({ task, onSave, onClose }) => {
  const [editedTask, setEditedTask] = useState({ ...task });

  const handleChange = (e) => {
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("dfsdds")
    onSave(editedTask);
    onClose();
  };

  return (
    <div className="modal">
      <h3>Edit Task</h3>
      <input
        name="title"
        value={editedTask.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        value={editedTask.description}
        onChange={handleChange}
      />
      <input
        name="dueDate"
        type="date"
        value={editedTask.dueDate}
        onChange={handleChange}
      />
      <select
        name="status"
        value={editedTask.status}
        onChange={handleChange}
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button onClick={handleSubmit}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default EditTaskModal;
