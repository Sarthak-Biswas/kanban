import React, {createContext, useContext, useState} from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [group, setGroup] = useState("Status");
    const [order, setOrder] = useState("Priority");
    const [data, setData] = useState({'tickets':[], 'users':[]})

    const updateGroup = (newValue) => {
        setGroup(newValue)
    }

    const updateOrder = (newValue) => {
        setOrder(newValue)
    }

    const updateData = (newValue) => {
        setData(newValue)
    }

    return ( 
        <AppContext.Provider value={{data, updateData, group, updateGroup, order, updateOrder}}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext}

