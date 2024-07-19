import { createContext, useContext, useState } from "react";

type Theme = 'light' | 'system' | 'dark';
type ThemeProviderState = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}
type ThemeProviderProps = {
    children:React.ReactNode,
    defaultTheme?: Theme;
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined);

export function ThemeProvider({ children, defaultTheme = 'system' }: ThemeProviderProps){
    const [theme, setTheme] = useState<Theme>(defaultTheme);
    return <ThemeProviderContext.Provider value={{theme, setTheme}}>{children}</ThemeProviderContext.Provider>
};

export function useTheme(){
const context =  useContext(ThemeProviderContext);
if(context===undefined) throw new Error('useTheme must be used within ThemeProvider');
return context;
};