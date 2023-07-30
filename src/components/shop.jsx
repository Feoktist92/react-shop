import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import { Preloader } from './preloader';
import { GoodsList } from './goodslist';
import { Cart } from './cart';
import { BasketList } from './basketlist';
import { Alert } from './alert';

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [alertName, setAlertName] = useState('');

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.mainId === item.mainId
        );
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });
            setOrder(newOrder);
        }
        setAlertName(item.displayName);
    };
    const removeFromBasket = (itemId) => {
        const newOrder = order.filter((elem) => elem.mainId !== itemId);
        setOrder(newOrder);
    };
    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    };
    const plusQuantity = (itemId) => {
        const newOrder = order.map((elem) => {
            if (elem.mainId === itemId) {
                const newQuantity = elem.quantity + 1;
                return {
                    ...elem,
                    quantity: newQuantity,
                };
            } else {
                return elem;
            }
        });
        setOrder(newOrder);
    };
    const minusQuantity = (itemId) => {
        const newOrder = order.map((elem) => {
            if (elem.mainId === itemId) {
                const newQuantity = elem.quantity - 1;
                return {
                    ...elem,
                    quantity: newQuantity >= 0 ? newQuantity : 0,
                };
            } else {
                return elem;
            }
        });
        setOrder(newOrder);
    };
    const closeAlert = () => {
        setAlertName('');
    };

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: { Authorization: API_KEY },
        })
            .then((response) => response.json())
            .then((data) => {
                data.shop && setGoods(data.shop);
                setLoading(false);
            });
    }, []);

    return (
        <main className='container content'>
            <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
            {loading ? (
                <Preloader />
            ) : (
                <GoodsList goods={goods} addToBasket={addToBasket} />
            )}
            {isBasketShow && (
                <BasketList
                    order={order}
                    handleBasketShow={handleBasketShow}
                    removeFromBasket={removeFromBasket}
                    plusQuantity={plusQuantity}
                    minusQuantity={minusQuantity}
                />
            )}
            {alertName && (
                <Alert displayName={alertName} closeAlert={closeAlert} />
            )}
        </main>
    );
}

export { Shop };
