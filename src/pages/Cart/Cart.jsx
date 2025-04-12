import React from 'react';
import { Link } from 'react-router';

// import Empty from '../../components/Empty/Empty';
import style from './Cart.module.scss';
import CardForCart from '../../components/CardForCart/CardForCart';

import { useSelector, useDispatch } from 'react-redux';
import Empty from '../../components/Empty/Empty';
import { clearCart, selectCart } from '../../redux/slices/cartSlice';

export default function Cart() {
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();

    if (cart.items.length === 0) return <Empty />;

    return (
        <div className={style.root}>
            <div className={style.name}>
                <h2>
                    <img src="./img/cartDark.svg" alt="cart" />
                    Корзина
                </h2>
                <p
                    onClick={() => {
                        dispatch(clearCart());
                    }}
                    className={style.clear}
                >
                    <img src="./img/trash.svg" alt="trash" />
                    Очистить корзину
                </p>
            </div>
            {cart.items.map((item, index) => (
                <CardForCart key={index} {...item} />
            ))}
            <div className={style.all}>
                <p>
                    Всего пицц: <b>{cart.totalCount} шт</b>
                </p>
                <p>
                    Сумма заказа: <span>{cart.totalCost} Р</span>
                </p>
            </div>
            <div className={style.buttons}>
                <Link to="/" className={style.back}>
                    Вернуться на главную
                </Link>
                <Link to="*" className={style.pay}>
                    Оплатить
                </Link>
            </div>
        </div>
    );
}
