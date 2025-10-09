import React from 'react';
import { IconSun, IconMoon, IconDeviceDesktop } from '@tabler/icons-react';
import { useTheme } from '@hooks/useTheme';
import { Button } from '@components/ui/Button';
import { THEMES } from '@utils/constants';
import { cn } from '@utils/helpers';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
  variant?: 'button' | 'dropdown';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  className, 
  showLabel = false, 
  variant = 'button' 
}) => {
  const { theme, isDark, setTheme, toggleTheme } = useTheme();

  if (variant === 'dropdown') {
    return (
      <div className={cn('relative', className)}>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as any)}
          className="appearance-none rounded-md border border-neutral-200 bg-white px-3 py-2 pr-8 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-50"
        >
          <option value={THEMES.LIGHT}>Light</option>
          <option value={THEMES.DARK}>Dark</option>
          <option value={THEMES.SYSTEM}>System</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-neutral-700 dark:text-neutral-300">
          <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
    );
  }

  const getIcon = () => {
    switch (theme) {
      case THEMES.LIGHT:
        return <IconSun className="h-4 w-4" />;
      case THEMES.DARK:
        return <IconMoon className="h-4 w-4" />;
      case THEMES.SYSTEM:
        return <IconDeviceDesktop className="h-4 w-4" />;
      default:
        return isDark ? <IconMoon className="h-4 w-4" /> : <IconSun className="h-4 w-4" />;
    }
  };

  const getLabel = () => {
    switch (theme) {
      case THEMES.LIGHT:
        return 'Light';
      case THEMES.DARK:
        return 'Dark';
      case THEMES.SYSTEM:
        return 'System';
      default:
        return isDark ? 'Dark' : 'Light';
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className={cn('gap-2', className)}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      {getIcon()}
      {showLabel && <span className="text-sm">{getLabel()}</span>}
    </Button>
  );
};