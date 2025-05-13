// components/TaskForm.tsx
import { useState } from 'react';

interface TaskFormProps {
  initialValue?: string;
  onSubmit: (title: string) => void;
  onCancel: () => void;
  isEdit?: boolean;
}

export default function TaskForm({ 
  initialValue = '', 
  onSubmit, 
  onCancel, 
  isEdit = false 
}: TaskFormProps) {
  const [title, setTitle] = useState(initialValue);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onSubmit(title.trim());
    }
  };
  
  return (
    <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-4">
      <h3 className="mb-2 text-lg font-medium">
        {isEdit ? 'Modifier la tâche' : 'Nouvelle tâche'}
      </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titre de la tâche..."
          className="mb-4 w-full rounded-md border border-gray-300 p-2"
          autoFocus
        />
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
          >
            Annuler
          </button>
          <button
            type="submit"
            className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
          >
            {isEdit ? 'Mettre à jour' : 'Ajouter'}
          </button>
        </div>
      </form>
    </div>
  );
}