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
            {displayName}
            <i
                className='material-icons basket-quantity'
                onClick={() => minusQuantity(mainId)}
            >
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
            = <b>{price.regularPrice * quantity}</b> руб.
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
        </li>
    );
}

export { BasketItem };
