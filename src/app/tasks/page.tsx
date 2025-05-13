// app/tasks/page.tsx
'use client';

import Link from 'next/link';
import Container from  '@/src/components/Container';
import TaskList from '@/src/components/TaskList'
import { ArrowLeft } from 'lucide-react';

export default function TasksPage() {
  return (
    <Container>
      <div className="space-y-6">
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center text-blue-600 hover:underline"
          >
            <ArrowLeft size={16} className="mr-1" />
            Retour
          </Link>
        </div>
        
        <TaskList />
      </div>
    </Container>
  );
}