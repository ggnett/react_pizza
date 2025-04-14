import * as React from 'react';

import style from './CardForCart.module.scss';
import { useDispatch } from 'react-redux';
import {
    addCountOfPizzaCart,
    addTotalCost,
    addTotalCount,
    minusCountOfPizza,
    minusItem,
    minusTotalCost,
    minusTotalCount,
} from '../../redux/slices/cartSlice';

interface prop {
    imageUrl: string,
    title: string,
    weight:number[],
    size: number[],
    price: number,
    count:number,
    idVnut:number
}


export default function CardForCart({ imageUrl, title, weight, size, price, count, idVnut }:prop) {
    const dispatch = useDispatch();

    return (
        <div className={style.root}>
            <img className={style.pizza} src={imageUrl} alt="gg" />
            <p className={style.name}>
                {title} <br />
                <span>
                    {weight}, {size} см.
                </span>
            </p>
            <p className={style.numb}>
                <span
                    onClick={() => {
                        if (count > 1) {
                            dispatch(minusCountOfPizza(idVnut));
                            dispatch(minusTotalCost(price));
                            dispatch(minusTotalCount(1));
                        } else {
                            dispatch(minusItem(idVnut));
                            dispatch(minusTotalCost(price));
                            dispatch(minusTotalCount(1));
                        }
                    }}
                    className={style.circle}
                >
                    -
                </span>
                {count}
                <span
                    onClick={() => {
                        dispatch(addCountOfPizzaCart(idVnut));
                        dispatch(addTotalCount());
                        dispatch(addTotalCost(price));
                    }}
                    className={style.circle}
                >
                    +
                </span>
            </p>
            <p className={style.price}>{price * count} Р</p>
            <p
                onClick={() => {
                    dispatch(minusItem(idVnut));
                    dispatch(minusTotalCost(price * count));
                    dispatch(minusTotalCount(count));
                }}
                className={[style.circle, style.last].join(' ')}
            >
                x
            </p>
        </div>
    );
}
