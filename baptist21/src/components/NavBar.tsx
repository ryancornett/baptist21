import ThemeToggle from "@/components/ThemeToggle";

'use client';

import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#resources', label: 'Resources' },
  { href: '#sections', label: 'Sections' },
  { href: '#topics', label: 'Topics' },
  { href: '#information', label: 'Information' },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 z-30 w-full bg-white/60 dark:bg-zinc-800/60 transition backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#top" className="text-lg font-bold tracking-tight px-2 py-0.5 border-2 cursor-pointer select-none rounded-lg border-indigo-700 text-indigo-700 dark:text-indigo-300 dark:border-indigo-300 transition">Baptist21.org</a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-800 dark:text-white transition-colors">
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-black hover:dark:text-gray-300 transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile Menu (Sheet) */}
        <div className="md:hidden">
        

        <Sheet open={open} onOpenChange={setOpen} modal={false}>
  <SheetTrigger asChild>
    <Button variant="ghost" size="icon">
      <Menu className="h-6 w-6" />
    </Button>
  </SheetTrigger>
  <SheetContent side="right" className="w-64">
    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
    <SheetDescription className="sr-only">Links to scroll through the catechism site</SheetDescription>
    <nav className="mt-6 space-y-4">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={() => setOpen(false)}
          className="block text-base font-medium text-gray-900 hover:underline"
        >
          {item.label}
        </a>
      ))}
    </nav>
  </SheetContent>
</Sheet>


        </div>
      </div>
    </nav>
  );
};

export default NavBar;
