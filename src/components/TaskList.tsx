// components/TaskList.tsx
'use client';

import { useState } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import DeleteModal from './DeleteModal';
import { useTasks } from '../lib/tasks';

export default function TaskList() {
  const { tasks, addTask, updateTask, deleteTask } = useTasks();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState<{ id: string; title: string; } | null>(null);
  const [taskToDelete, setTaskToDelete] = useState<{ id: string; title: string; } | null>(null);
  
  const handleAddTask = (title: string) => {
    addTask(title);
    setIsFormOpen(false);
  };
  
  const handleEditTask = (task: { id: string; title: string; }) => {
    setCurrentTask(task);
    setIsFormOpen(true);
  };
  
  const handleUpdateTask = (title: string) => {
    if (currentTask) {
      updateTask(currentTask.id, { title });
      setCurrentTask(null);
      setIsFormOpen(false);
    }
  };
  
  const confirmDelete = (task: { id: string; title: string; }) => {
    setTaskToDelete(task);
  };
  
  const handleDeleteTask = () => {
    if (taskToDelete) {
      deleteTask(taskToDelete.id);
      setTaskToDelete(null);
    }
  };
  
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Ma todo list</h2>
        <button
          onClick={() => {
            setCurrentTask(null);
            setIsFormOpen(true);
          }}
          className="flex items-center gap-1 rounded-md bg-green-600 px-3 py-1 text-sm text-white hover:bg-green-700"
        >
          + Créer une tâche
        </button>
      </div>
      
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">Aucune tâche pour le moment.</p>
      ) : (
        <div className="divide-y divide-gray-200 rounded-md border">
          {tasks.map(task => (
            <TaskItem 
              key={task.id}
              task={task}
              onEdit={() => handleEditTask(task)}
              onDelete={() => confirmDelete(task)}
            />
          ))}
        </div>
      )}
      
      {isFormOpen && (
        <TaskForm
          initialValue={currentTask?.title || ''}
          onSubmit={currentTask ? handleUpdateTask : handleAddTask}
          onCancel={() => {
            setIsFormOpen(false);
            setCurrentTask(null);
          }}
          isEdit={!!currentTask}
        />
      )}
      
      {taskToDelete && (
        <DeleteModal
          taskTitle={taskToDelete.title}
          onConfirm={handleDeleteTask}
          onCancel={() => setTaskToDelete(null)}
        />
      )}
    </div>
  );
}