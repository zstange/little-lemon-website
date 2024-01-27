import { createContext, useContext, useState, useEffect } from "react";

const WindowContext = createContext();

const WindowProvider = ({children}) => {
    const [windowSize, setWindowSize] = useState(window.screen.width);

    const updateMedia = () => {
        setWindowSize(window.screen.width)
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (
        <WindowContext.Provider value={{windowSize}}>
            {children}
        </WindowContext.Provider>
    );
};

export const useWindowContext = () => useContext(WindowContext);

export default WindowProvider;