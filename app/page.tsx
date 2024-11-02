import { Rocket } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { TechStackCard } from '@/components/tech-stack-card';
import { DemoCard } from '@/components/demo-card';

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Rocket className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">Modern Next.js Stack</h1>
          </div>
          <ThemeToggle />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TechStackCard />
          <DemoCard />
        </div>
      </div>
    </main>
  );
}
