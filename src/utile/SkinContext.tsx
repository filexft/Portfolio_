import {
    createContext,
    ReactNode,
    useState,
    Dispatch,
    SetStateAction,
} from "react";

type ThemeContextType = {
    theme: string;
    updateTheme: Dispatch<SetStateAction<string>>;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
    undefined,
);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<string>("#ec1839");

    const updateTheme = (val: string) => {
        setTheme(val);
    };

    return (
        <ThemeContext.Provider value={{ theme, updateTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
