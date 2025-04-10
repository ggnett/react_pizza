import React from 'react';
import './ProductCard.scss';
import { useState } from 'react';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { addTotalCost, addItemToCart, addCountOfPizza, addTotalCount, plusIdVnut } from '../../redux/slices/cartSlice';

export default function ProductCard({ id, title, imageUrl, price, types, sizes }) {
    const dispatch = useDispatch();
    const itemms = useSelector((state) => state.cart.items);
    const idVnut = useSelector((state) => state.cart.idVnut);
    const sizeName = ['тонкое', 'традиционное'];

    const [count, setCount] = useState(0);
    const [weightP, setWeightP] = useState(0);
    const [sizeP, setSizeP] = useState(0);

    const hundler = () => {
        const obj = {
            id,
            title,
            imageUrl,
            price,
            weight: sizeName[weightP],
            size: sizes[sizeP],
            count: 1,
            idVnut,
        };
        setCount((prev) => prev + 1);
        const objSearch = itemms.find((item, index) => item.id === id && item.size === obj.size && item.weight === obj.weight);
        if (objSearch) {
            const i = itemms.indexOf(objSearch);
            dispatch(addCountOfPizza(i));
            dispatch(addTotalCount());
        } else {
            dispatch(addItemToCart(obj));
            dispatch(plusIdVnut());
            console.log(obj);
        }
        dispatch(addTotalCost(price));
    };

    React.useEffect(() => {
        itemms.forEach((item, index) => {
            if (item.id === id) setCount((prev) => prev + item.count);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                <span
                    className="ad"
                    onClick={() => {
                        hundler();
                    }}
                >
                    + Добавить <p className={`${count === 0 ? 'hide' : ''} counter`}>{count}</p>
                </span>
            </div>
        </div>
    );
}
