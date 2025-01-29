// lib/create-theme.js
export function createTheme(theme) {
  return {
    light: Object.entries(theme.light).reduce((acc, [key, value]) => {
      acc[`--${key}`] = value;
      return acc;
    }, {}),
    dark: Object.entries(theme.dark).reduce((acc, [key, value]) => {
      acc[`--${key}`] = value;
      return acc;
    }, {}),
  };
}
