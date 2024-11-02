'use client';

import { useEffect, useState } from 'react';
import { format } from 'date-fns';

export function CurrentTime() {
  const [mounted, setMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="text-sm text-muted-foreground">
      {format(currentTime, 'PPpp')}
    </div>
  );
}