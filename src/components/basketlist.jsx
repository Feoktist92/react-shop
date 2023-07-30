import { BasketItem } from './basketitem';

function BasketList(props) {
    const {
        order = [],
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        plusQuantity = Function.prototype,
        minusQuantity = Function.prototype,
    } = props;
    const totalPrice = order.reduce((sum, elem) => {
        return (sum = sum + elem.price.regularPrice * elem.quantity);
    }, 0);
    return (
        <ul className='collection basket-list'>
            <li
                className='collection-item active'
                style={{ backgroundColor: '#6a1b9a' }}
            >
                Корзина
            </li>
            {order.length ? (
                order.map((item) => (
                    <BasketItem
                        key={item.mainId}
                        removeFromBasket={removeFromBasket}
                        plusQuantity={plusQuantity}
                        minusQuantity={minusQuantity}
                        {...item}
                    />
                ))
            ) : (
                <li className='collection-item'>Корзина пуста</li>
            )}
            <li
                className='collection-item active'
                style={{ backgroundColor: '#6a1b9a' }}
            >
                Общая стоимость: <b>{totalPrice}</b> руб.
                <button className='btn-order btn purple lighten-1'>
                    Оформить заказ
                </button>
            </li>
            <i
                className='material-icons basket-close'
                onClick={handleBasketShow}
            >
                close
            </i>
        </ul>
    );
}

export { BasketList };
