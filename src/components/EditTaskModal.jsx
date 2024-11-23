import React, { useState } from "react";

const EditTaskModal = ({ task, onSave, onClose }) => {
  const [editedTask, setEditedTask] = useState(task);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSave = () => {
    onSave(editedTask);
  };

  return (
    <div className="modal show d-block">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Task</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <input
              type="text"
              name="title"
              className="form-control mb-3"
              value={editedTask.title}
              onChange={handleChange}
            />
            <textarea
              name="description"
              className="form-control mb-3"
              value={editedTask.description}
              onChange={handleChange}
            ></textarea>
            <input
              type="date"
              name="dueDate"
              className="form-control mb-3"
              value={editedTask.dueDate}
              onChange={handleChange}
            />
            <select
              name="status"
              className="form-control mb-3"
              value={editedTask.status}
              onChange={handleChange}
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button className="btn btn-primary" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;
