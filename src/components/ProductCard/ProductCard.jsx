import React from 'react';
import './ProductCard.scss';
import { useState } from 'react';
import cn from 'classnames';

export default function ProductCard({ title, imageUrl, price, types, sizes }) {
    const sizeName = ['тонкое', 'традиционное'];

    const [count, setCount] = useState(0);
    const [weightP, setWeightP] = useState(0);
    const [sizeP, setSizeP] = useState(0);

    const hundler = () => {
        setCount((prev) => prev + 1);
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
