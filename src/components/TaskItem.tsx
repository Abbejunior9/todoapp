// components/TaskItem.tsx
import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  status: string;
  createdAt: string;
}

interface TaskItemProps {
  task: Task;
  onEdit: () => void;
  onDelete: () => void;
}

export default function TaskItem({ task, onEdit, onDelete }: TaskItemProps) {
  return (
    <div className="flex items-center justify-between p-3">
      <div>
        <h3 className="font-medium text-gray-800">{task.title}</h3>
        <span className="text-sm text-gray-500">
          Statut: {task.status}
        </span>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={onEdit}
          className="rounded p-1 text-blue-600 hover:bg-blue-100"
          aria-label="Modifier"
        >
          <Pencil size={18} />
        </button>
        <button
          onClick={onDelete}
          className="rounded p-1 text-red-600 hover:bg-red-100"
          aria-label="Supprimer"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}