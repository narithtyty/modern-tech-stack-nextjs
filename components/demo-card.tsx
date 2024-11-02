'use client';

import { useAtom } from 'jotai';
import { useLocalStorage } from 'usehooks-ts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CurrentTime } from '@/components/current-time';
import { themeAtom } from '@/lib/store';
import { useEffect, useState } from 'react';

export function DemoCard() {
  const [theme] = useAtom(themeAtom);
  const [visits, setVisits] = useLocalStorage('visits', 0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Demo Features</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-sm text-muted-foreground">Loading...</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Demo Features</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-sm text-muted-foreground">
          Current theme: {theme}
        </div>
        <div className="text-sm text-muted-foreground">
          Visit count: {visits}
        </div>
        <CurrentTime />
        <Button onClick={() => setVisits(prev => prev + 1)}>
          Increment Visits
        </Button>
      </CardContent>
    </Card>
  );
}