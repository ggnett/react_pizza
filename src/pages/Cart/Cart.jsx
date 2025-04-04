import React from 'react';
import { Link } from 'react-router';

// import Empty from '../../components/Empty/Empty';
import style from './Cart.module.scss';
import CardForCart from '../../components/CardForCart/CardForCart';

export default function Cart() {
    return (
        <div className={style.root}>
            <div className={style.name}>
                <h2>
                    <img src="./img/cartDark.svg" alt="cart" />
                    Корзина
                </h2>
                <p className={style.clear}>
                    <img src="./img/trash.svg" alt="trash" />
                    Очистить корзину
                </p>
            </div>
            <CardForCart />
            <CardForCart />
            <CardForCart />
            <div className={style.all}>
                <p>
                    Всего пицц: <b>3 шт</b>
                </p>
                <p>
                    Сумма заказа: <span>900 Р</span>
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
