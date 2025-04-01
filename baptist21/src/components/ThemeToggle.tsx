// components/ThemeToggle.tsx
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // prevents hydration mismatch

  const nextTheme = theme === "light" ? "dark" : "light";
  const Icon = theme === "light" ? Moon : Sun;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(nextTheme)}
            aria-label="Toggle theme"
          >
            <Icon className="h-[1.2rem] w-[1.2rem] transition-all duration-300" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Switch to {nextTheme} mode</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
