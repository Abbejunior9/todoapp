// lib/tasks.ts
'use client';

import { useState, useEffect } from 'react';

export interface Task {
  id: string;
  title: string;
  status: string;
  createdAt: string;
}

export function useTasks() {
  // État initial des tâches
  const [tasks, setTasks] = useState<Task[]>([]);
  
  // Charger les tâches depuis localStorage au montage du composant
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);
  
  // Sauvegarder les tâches dans localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  
  // Ajouter une nouvelle tâche
  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      status: 'En cours',
      createdAt: new Date().toISOString(),
    };
    setTasks([...tasks, newTask]);
  };
  
  // Modifier une tâche existante
  const updateTask = (id: string, updatedTask: Partial<Task>) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, ...updatedTask } : task
    ));
  };
  
  // Supprimer une tâche
  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  
  return {
    tasks,
    addTask,
    updateTask,
    deleteTask
  };
}