import React, { useContext, useState, createContext, ReactNode } from 'react';
import { changeCssVariables } from '../services/changeCssVariables';

export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';
export const THEME_NEUTRAL = 'neutral';


// interface IThemeProvider {
//   children:'string'
// }

interface IContextType {
  theme: string,
  change: (name: string) => void
}

const ThemeContext = createContext<IContextType | null>(null);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children, ...props }) => {

  const [theme, setTheme] = useState<string>('')

  const change = (name: string) => {
    setTheme(name);
    changeCssVariables(name);
  }

  return (
    <ThemeContext.Provider value={{ theme, change }} {...props}>
      {children}
    </ThemeContext.Provider>

  )

}

export const useTheme = (): { theme: string, change: (name: string) => void } | null => useContext(ThemeContext)
