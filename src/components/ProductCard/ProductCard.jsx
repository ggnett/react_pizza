import React from 'react';
import './ProductCard.scss';
import { useState } from 'react';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { addTotalCost, addItemToCart } from '../../redux/slices/cartSlice';

export default function ProductCard({ id, title, imageUrl, price, types, sizes }) {
    const dispatch = useDispatch();
    const itemms = useSelector((state) => state.cart.items);
    const sizeName = ['тонкое', 'традиционное'];

    const [count, setCount] = useState(0);
    const [weightP, setWeightP] = useState(0);
    const [sizeP, setSizeP] = useState(0);

    const hundler = () => {
        const weight = sizeName[weightP];
        const size = sizes[sizeP];
        setCount((prev) => prev + 1);
        // dopilit' poisk po  masivu na vernoe
        const test = Boolean(itemms.find((item) => item.id === id && item.size === size && item.weight === weight));
        console.log(test);
        dispatch(addItemToCart({ id, title, imageUrl, price, weight, size }));
        dispatch(addTotalCost(price));
    };

    return (
        <div className="card">
            <img src={imageUrl} alt="gg" />
            <p className="nameP">{title}</p>
            <div className="presc">
                <ul className="weight">
                    {types.map((item, index) => (
                        <li key={index} onClick={() => setWeightP(index)} className={weightP === index ? 'active' : ''}>
                            {sizeName[item]}
                        </li>
                    ))}
                </ul>
                <ul className="size">
                    {sizes.map((item, index) => (
                        <li key={index} onClick={() => setSizeP(index)} className={sizeP === index ? 'active' : ''}>
                            {item} см
                        </li>
                    ))}
                </ul>
            </div>
            <div className={cn('price')}>
                <p>от {price} Р</p>
                <span className="ad" onClick={hundler}>
                    + Добавить <p className={`${count === 0 ? 'hide' : ''} counter`}>{count}</p>
                </span>
            </div>
        </div>
    );
}
