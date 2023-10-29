import {createContext, useState } from 'react'

export const ThemeContext = createContext('');

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("#ec1839");

    const updateTheme = (val) => {
        setTheme(val);
    };
    return (
        <ThemeContext.Provider value={{ theme, updateTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};  

export default ThemeProvider