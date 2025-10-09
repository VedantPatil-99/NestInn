import { useThemeStore } from '@store/themeStore';
import { THEMES } from '@utils/constants';

export const useTheme = () => {
  const {
    theme,
    systemTheme,
    isDark,
    setTheme,
    toggleTheme,
    setSystemTheme,
    initialize,
  } = useThemeStore();

  return {
    // State
    theme,
    systemTheme,
    isDark,
    isLight: !isDark,
    
    // Computed
    effectiveTheme: theme === THEMES.SYSTEM ? systemTheme : theme,
    isSystemTheme: theme === THEMES.SYSTEM,
    
    // Actions
    setTheme,
    toggleTheme,
    setSystemTheme,
    initialize,
    
    // Utility functions
    setLightTheme: () => setTheme(THEMES.LIGHT),
    setDarkTheme: () => setTheme(THEMES.DARK),
    setSystemTheme: () => setTheme(THEMES.SYSTEM),
  };
};