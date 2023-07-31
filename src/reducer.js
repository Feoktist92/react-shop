export function reducer(state, { type, payload }) {
    switch (type) {
        case 'SET_GOODS':
            return {
                ...state,
                goods: payload || [],
                loading: false,
            };

        case 'ADD_TO_BASKET': {
            const itemIndex = state.order.findIndex(
                (orderItem) => orderItem.mainId === payload.mainId
            );
            let newOrder = null;
            if (itemIndex < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1,
                };
                newOrder = [...state.order, newItem];
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        };
                    } else {
                        return orderItem;
                    }
                });
            }
            return {
                ...state,
                order: newOrder,
                alertName: payload.displayName,
            };
        }
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                order: state.order.filter((elem) => elem.mainId !== payload.id),
            };
        case 'PLUS_QUANTITY':
            return {
                ...state,
                order: state.order.map((elem) => {
                    if (elem.mainId === payload.mainId) {
                        const newQuantity = elem.quantity + 1;
                        return {
                            ...elem,
                            quantity: newQuantity,
                        };
                    } else {
                        return elem;
                    }
                }),
            };
        case 'MINUS_QUANTITY':
            return {
                ...state,
                order: state.order.map((elem) => {
                    if (elem.mainId === payload.mainId) {
                        const newQuantity = elem.quantity - 1;
                        return {
                            ...elem,
                            quantity: newQuantity >= 0 ? newQuantity : 0,
                        };
                    } else {
                        return elem;
                    }
                }),
            };
        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: '',
            };
        case 'TOGGLE_BASKET': {
            return {
                ...state,
                isBasketShow: !state.isBasketShow,
            };
        }
        default:
            return state;
    }
}
