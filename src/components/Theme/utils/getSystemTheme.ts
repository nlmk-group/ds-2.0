import {Themes} from '../types'

export const getSystemTheme = () => {
  const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const preferredTheme = darkModeQuery.matches ? Themes.DARK : Themes.LIGHT;

  return preferredTheme;
}