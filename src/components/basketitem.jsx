function BasketItem(props) {
    const {
        mainId,
        displayName,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        plusQuantity = Function.prototype,
        minusQuantity = Function.prototype,
    } = props;
    return (
        <li className='collection-item'>
            <div className='name'>{displayName}</div>
            <div className='price'>
                {' '}
                <div className='counter'>
                    <i
                        className='material-icons basket-quantity'
                        onClick={() => minusQuantity(mainId)}
                    >
                        {' '}
                        remove
                    </i>
                    {'  '}x{quantity}
                    {'  '}
                    <i
                        className='material-icons basket-quantity'
                        onClick={() => plusQuantity(mainId)}
                    >
                        add
                    </i>
                </div>
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
        </li>
    );
}

export { BasketItem };
