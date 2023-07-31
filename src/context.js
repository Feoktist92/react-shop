import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

const inititalState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: '',
};

export const ShopContext = createContext();

export const ContextProvider = ({ children }) => {
    const [value, dispatch] = useReducer(reducer, inititalState);

    value.addToBasket = (item) => {
        dispatch({ type: 'ADD_TO_BASKET', payload: { item } });
    };
    value.removeFromBasket = (itemId) => {
        dispatch({ type: 'REMOVE_FROM_BASKET', payload: { mainId: itemId } });
    };
    value.closeAlert = () => {
        dispatch({ type: 'CLOSE_ALERT' });
    };
    value.plusQuantity = (itemId) => {
        dispatch({ type: 'PLUS_QUANTITY', payload: { mainId: itemId } });
    };
    value.minusQuantity = (itemId) => {
        dispatch({ type: 'MINUS_QUANTITY', payload: { mainId: itemId } });
    };
    value.handleBasketShow = () => {
        dispatch({ type: 'TOGGLE_BASKET' });
    };
    value.setGoods = (data) => {
        dispatch({ type: 'SET_GOODS', payload: { payload: data } });
    };

    return (
        <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
    );
};
