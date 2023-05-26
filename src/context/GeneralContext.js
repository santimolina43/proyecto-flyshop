import { createContext } from "react";
import { useState } from 'react';

export const GeneralContext = createContext();


export const GeneralProvider = ({children}) => {

    const [footer, setFooter] = useState(false);
    const [navCollapse, setNavCollapse] = useState(false);

    const fijarFooter = () => {
        setFooter(true)
    }
    const desfijarFooter = () => {
        setFooter(false)
    }

    const collapseNav = () => {
        if (navCollapse) {
            setNavCollapse(false)
        } else {
            setNavCollapse(true)
        }
    }

    return (
        <GeneralContext.Provider value={{
            footer,
            fijarFooter,
            desfijarFooter,
            navCollapse,
            collapseNav
        }}>
            {children}
        </GeneralContext.Provider>
    )
}