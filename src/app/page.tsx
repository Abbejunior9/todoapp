// app/page.tsx
'use client';

import Link from 'next/link';
import Container from '../components/Container';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col items-center text-center">
        <h1 className="mb-2 text-3xl font-bold text-gray-800">To Do App</h1>
        <p className="mb-6 text-gray-600">
          Gérez vos tâches simplement et efficacement.
        </p>
        <Link 
          href="/tasks" 
          className="rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
        >
          Voir mes tâches
        </Link>
      </div>
    </Container>
  );
}