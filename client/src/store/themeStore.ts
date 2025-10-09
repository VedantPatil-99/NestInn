import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { STORAGE_KEYS, THEMES } from '@utils/constants';

type Theme = typeof THEMES[keyof typeof THEMES];

interface ThemeState {
  theme: Theme;
  systemTheme: 'light' | 'dark';
  isDark: boolean;
}

interface ThemeActions {
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  setSystemTheme: (theme: 'light' | 'dark') => void;
  initialize: () => void;
}

type ThemeStore = ThemeState & ThemeActions;

const getSystemTheme = (): 'light' | 'dark' => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'light';
};

const getEffectiveTheme = (theme: Theme, systemTheme: 'light' | 'dark'): 'light' | 'dark' => {
  if (theme === THEMES.SYSTEM) {
    return systemTheme;
  }
  return theme as 'light' | 'dark';
};

const applyTheme = (isDark: boolean) => {
  if (typeof document !== 'undefined') {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }
};

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      // Initial state
      theme: THEMES.SYSTEM,
      systemTheme: getSystemTheme(),
      isDark: false,

      // Actions
      setTheme: (theme: Theme) => {
        const { systemTheme } = get();
        const isDark = getEffectiveTheme(theme, systemTheme) === 'dark';
        
        applyTheme(isDark);
        
        set({
          theme,
          isDark,
        });
      },

      toggleTheme: () => {
        const { theme } = get();
        
        if (theme === THEMES.LIGHT) {
          get().setTheme(THEMES.DARK);
        } else if (theme === THEMES.DARK) {
          get().setTheme(THEMES.LIGHT);
        } else {
          // If system theme, toggle to opposite of current system theme
          const { systemTheme } = get();
          get().setTheme(systemTheme === 'dark' ? THEMES.LIGHT : THEMES.DARK);
        }
      },

      setSystemTheme: (systemTheme: 'light' | 'dark') => {
        const { theme } = get();
        const isDark = getEffectiveTheme(theme, systemTheme) === 'dark';
        
        applyTheme(isDark);
        
        set({
          systemTheme,
          isDark,
        });
      },

      initialize: () => {
        const { theme, systemTheme } = get();
        const isDark = getEffectiveTheme(theme, systemTheme) === 'dark';
        
        applyTheme(isDark);
        
        set({ isDark });

        // Listen for system theme changes
        if (typeof window !== 'undefined') {
          const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
          
          const handleChange = (e: MediaQueryListEvent) => {
            get().setSystemTheme(e.matches ? 'dark' : 'light');
          };
          
          mediaQuery.addEventListener('change', handleChange);
          
          // Return cleanup function
          return () => {
            mediaQuery.removeEventListener('change', handleChange);
          };
        }
      },
    }),
    {
      name: STORAGE_KEYS.THEME,
      partialize: (state) => ({
        theme: state.theme,
      }),
    }
  )
);