// components/Container.tsx
import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className={`w-full max-w-md rounded-lg bg-white p-6 shadow-md ${className}`}>
        {children}
      </div>
    </div>
  );
}