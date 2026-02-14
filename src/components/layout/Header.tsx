import Link from 'next/link';
import { Film, ListVideo } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Film className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold">FilmSphere</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Button asChild variant="ghost">
              <Link href="/watchlist" className="flex items-center gap-2">
                <ListVideo className="h-4 w-4" />
                <span>Watchlist</span>
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
