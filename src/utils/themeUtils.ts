// Theme utilities for changing accent color
export interface ThemeColors {
  accent: string;
  accentHover: string;
  accentLight: string;
  accentDark: string;
  accentGlow: string;
  accentGlowStrong: string;
}

export const defaultTheme: ThemeColors = {
  accent: '#8b5cf6',
  accentHover: '#7c3aed',
  accentLight: '#a78bfa',
  accentDark: '#6d28d9',
  accentGlow: 'rgba(139, 92, 246, 0.3)',
  accentGlowStrong: 'rgba(139, 92, 246, 0.5)',
};

export const predefinedThemes: Record<string, ThemeColors> = {
  purple: {
    accent: '#8b5cf6',
    accentHover: '#7c3aed',
    accentLight: '#a78bfa',
    accentDark: '#6d28d9',
    accentGlow: 'rgba(139, 92, 246, 0.3)',
    accentGlowStrong: 'rgba(139, 92, 246, 0.5)',
  },
  blue: {
    accent: '#3b82f6',
    accentHover: '#2563eb',
    accentLight: '#60a5fa',
    accentDark: '#1d4ed8',
    accentGlow: 'rgba(59, 130, 246, 0.3)',
    accentGlowStrong: 'rgba(59, 130, 246, 0.5)',
  },
  green: {
    accent: '#10b981',
    accentHover: '#059669',
    accentLight: '#34d399',
    accentDark: '#047857',
    accentGlow: 'rgba(16, 185, 129, 0.3)',
    accentGlowStrong: 'rgba(16, 185, 129, 0.5)',
  },
  pink: {
    accent: '#ec4899',
    accentHover: '#db2777',
    accentLight: '#f472b6',
    accentDark: '#be185d',
    accentGlow: 'rgba(236, 72, 153, 0.3)',
    accentGlowStrong: 'rgba(236, 72, 153, 0.5)',
  },
  orange: {
    accent: '#f97316',
    accentHover: '#ea580c',
    accentLight: '#fb923c',
    accentDark: '#c2410c',
    accentGlow: 'rgba(249, 115, 22, 0.3)',
    accentGlowStrong: 'rgba(249, 115, 22, 0.5)',
  },
};

export const applyTheme = (theme: ThemeColors) => {
  const root = document.documentElement;
  root.style.setProperty('--accent-color', theme.accent);
  root.style.setProperty('--accent-color-hover', theme.accentHover);
  root.style.setProperty('--accent-color-light', theme.accentLight);
  root.style.setProperty('--accent-color-dark', theme.accentDark);
  root.style.setProperty('--accent-glow', theme.accentGlow);
  root.style.setProperty('--accent-glow-strong', theme.accentGlowStrong);
};

export const getCurrentTheme = (): ThemeColors => {
  const root = document.documentElement;
  const computedStyle = getComputedStyle(root);
  
  return {
    accent: computedStyle.getPropertyValue('--accent-color').trim() || defaultTheme.accent,
    accentHover: computedStyle.getPropertyValue('--accent-color-hover').trim() || defaultTheme.accentHover,
    accentLight: computedStyle.getPropertyValue('--accent-color-light').trim() || defaultTheme.accentLight,
    accentDark: computedStyle.getPropertyValue('--accent-color-dark').trim() || defaultTheme.accentDark,
    accentGlow: computedStyle.getPropertyValue('--accent-glow').trim() || defaultTheme.accentGlow,
    accentGlowStrong: computedStyle.getPropertyValue('--accent-glow-strong').trim() || defaultTheme.accentGlowStrong,
  };
};

export const saveThemeToStorage = (themeName: string) => {
  localStorage.setItem('app-theme', themeName);
};

export const loadThemeFromStorage = (): string => {
  return localStorage.getItem('app-theme') || 'purple';
};
