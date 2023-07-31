import { useContext } from 'react';
import { ShopContext } from '../context';

function BasketItem(props) {
    const { mainId, displayName, price, quantity } = props;

    const { removeFromBasket, plusQuantity, minusQuantity } =
        useContext(ShopContext);

    return (
        <li className='collection-item'>
            <div className='name'>{displayName}</div>
            <div className='price'>
                {' '}
                <div className='counter'>
                    <i
                        className='material-icons basket-quantity'
                        onClick={() => {
                            minusQuantity(mainId);
                            if (quantity === 0) removeFromBasket(mainId);
                        }}
                    >
                        {' '}
                        remove
                    </i>
                    {'  '}
                    {quantity > 0 ? quantity : removeFromBasket(mainId)}
                    {'  '}
                    <i
                        className='material-icons basket-quantity'
                        onClick={() => plusQuantity(mainId)}
                    >
                        add
                    </i>
                </div>
                <div className='sum-price'>
                    <b>{price.regularPrice * quantity}</b> руб.
                    <span
                        className='secondary-content'
                        onClick={() => {
                            removeFromBasket(mainId);
                        }}
                    >
                        <i
                            className='material-icons basket-delete'
                            style={{ color: '#6a1b9a' }}
                        >
                            close
                        </i>
                    </span>
                </div>
            </div>
        </li>
    );
}

export { BasketItem };
