import React from "react";

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.dueDate}</td>
              <td>
              <span
                    className={`badge ${
                      task.status === 'Completed'
                        ? 'bg-success'
                        : task.status === 'In Progress'
                        ? 'bg-warning text-dark'
                        : 'bg-secondary'
                    }`}
                  >
                    {task.status}
                  </span>



                </td>
              <td>
                <button
                  className="btn btn-primary btn-sm me-2"
                  onClick={() => onEdit(task)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(task.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" className="text-center">
              No tasks available.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TaskList;
