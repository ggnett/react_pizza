import React from 'react';
import './ProductCard.scss';
import { useState } from 'react';
import cn from 'classnames';

export default function ProductCard({name,imageUrl,price}) {
    const [count, setCount] = useState(0);

    const hundler = () => {
        setCount((prev) => prev + 1);
    };

    return (
        <div className="card">
            <img src={imageUrl} alt="gg" />
            <p className="nameP">{name}</p>
            <div className="presc">
                <ul className="weight">
                    <li className="active">тонкое</li>
                    <li>традиционное</li>
                </ul>
                <ul className="size">
                    <li className="active">20 см.</li>
                    <li>30 см.</li>
                    <li>40 см.</li>
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
