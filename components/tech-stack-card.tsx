import { Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function TechStackCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Github className="h-5 w-5" />
          Tech Stack
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-2">
          <li>Next.js Framework</li>
          <li>Lucide React Icons</li>
          <li>Jotai State Management</li>
          <li>Axios + TanStack Query</li>
          <li>useHooks-ts</li>
          <li>date-fns</li>
          <li>shadcn/ui</li>
          <li>Tailwind CSS</li>
          <li>TanStack Table</li>
        </ul>
      </CardContent>
    </Card>
  );
}