import { createContext, useState } from "react";

//Create the context
export const GlobalContext = createContext(null);

//Create the global state that receipe component as a children
function GlobalState({ children }) {
    const [theme, setTheme] = useState('light')
    const handleChangeTheme = () => { setTheme(theme === 'light' ? 'dark' : 'light') }
    return <GlobalContext.Provider value={{ theme, handleChangeTheme }}>{children}</GlobalContext.Provider>
}
export default GlobalState