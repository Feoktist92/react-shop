import { useContext } from 'react';
import { ShopContext } from '../context';

function GoodsItem(props) {
    const { mainId, displayName, displayDescription, price, displayAssets } =
        props;

    const { addToBasket } = useContext(ShopContext);

    return (
        <div className='card'>
            <div className='card-image'>
                <img
                    src={displayAssets[0].full_background}
                    alt='{displayName}'
                />
            </div>
            <div className='card-content'>
                <div className='card-title' style={{ marginBottom: '30px' }}>
                    {displayName}
                </div>
                <p>{displayDescription}</p>
            </div>
            <div className='card-action'>
                <button
                    className='btn'
                    style={{ backgroundColor: '#6a1b9a' }}
                    onClick={() => addToBasket({ mainId, displayName, price })}
                >
                    Купить
                </button>
                <span className='right' style={{ fontSize: '18px' }}>
                    {price.regularPrice} руб.
                </span>
            </div>
        </div>
    );
}

export { GoodsItem };
