// app/layout.tsx
import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Todo App',
  description: 'Gérez vos tâches simplement et efficacement.',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}