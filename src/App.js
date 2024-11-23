import React, { useState, useEffect } from 'react';
import AddTaskForm from './components/addtask';
import TaskList from './components/tasklist';
import EditTaskModal from './components/EditTaskModal';
import ConfirmDeleteModal from './components/deletetask';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [taskToDelete, setTaskToDelete] = useState(null);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);

  const saveTask = (editedTask) => {
    setTasks(
      tasks.map((task, index) =>
        index === editingTask.index ? editedTask : task
      )
    );
    setEditingTask(null);
  };

  const deleteTask = () => {
    setTasks(tasks.filter((_, index) => index !== taskToDelete));
    setTaskToDelete(null);
  };

  return (
    <div className="App">
      <h1>Task Tracker</h1>
      <AddTaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        onEdit={(index) => setEditingTask({ index, ...tasks[index] })}
        onDelete={(index) => setTaskToDelete(index)}
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
