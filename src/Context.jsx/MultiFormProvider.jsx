import React, { createContext, useReducer, useState } from 'react'

export const MultiPageContext = createContext()
function MultiFormProvider({ children }) {
    const [togglepage, settogglepage] = useState(true)
    const initialState = [
    ]

    const reducer = (state, action) => {
        switch (action.type) {
            case "Add User Details":
                return [
                    ...state, action.payload
                ];

            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    const togglePageBtn = () => {
        settogglepage(!togglepage)
    }
    return (
        <MultiPageContext.Provider value={{ togglePageBtn, togglepage, state, dispatch }}>
            {children}
        </MultiPageContext.Provider>
    )
}

export default MultiFormProvider