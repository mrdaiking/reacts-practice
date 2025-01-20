import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import cartItems from "./data";
import {
    CLEAR_CART,
    REMOVE,
    INCREASE,
    DECREASE,
    LOADING,
    DISPLAY_ITEMS
} from "./action";
const AppContext = createContext();


const initailState = {
    loading: false,
    cart: new Map(cartItems.map(item => [item.id, item])),
}

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initailState);
    return (
        <AppContext.Provider>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}
