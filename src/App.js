import React, { useState, useEffect } from "react";
import AddTaskForm from "./components/addtask";
import TaskList from "./components/tasklist";
import EditTaskModal from "./components/EditTaskModal";
import ConfirmDeleteModal from "./components/deletetask";

function getLocalStorage() {
  const list = localStorage.getItem("tasks");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
}

const App = () => {
  const [tasks, setTasks] = useState(getLocalStorage());
  const [editingTask, setEditingTask] = useState(null);
  const [taskToDelete, setTaskToDelete] = useState(null);

  // Save tasks to localStorage on every update
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    const newTask = { id: Date.now(), ...task }; // Add a unique ID
    setTasks([...tasks, newTask]);
  };

  const saveTask = (editedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === editedTask.id ? editedTask : task
      )
    );
    setEditingTask(null);
  };

  const deleteTask = () => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== taskToDelete)
    );
    setTaskToDelete(null);
  };

  return (
    <div className="App container">
      <h1 className="text-center my-4">Task Tracker</h1>
      <AddTaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        onEdit={(task) => setEditingTask(task)}
        onDelete={(taskId) => setTaskToDelete(taskId)}
      />
      {editingTask && (
        <EditTaskModal
          task={editingTask}
          onSave={saveTask}
          onClose={() => setEditingTask(null)}
        />
      )}
      {taskToDelete !== null && (
        <ConfirmDeleteModal
          onConfirm={deleteTask}
          onCancel={() => setTaskToDelete(null)}
        />
      )}
    </div>
  );
};

export default App;
