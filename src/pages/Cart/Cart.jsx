import React from 'react';
import { Link } from 'react-router';

import style from './Cart.module.scss';

export default function Cart() {
    return (
        <div className={style.root}>
            <p>
                <span>😕</span> <br />
                Корзина пуста
            </p>
            <p className={style.presc}>
                Вероятней всего, вы не заказывали ещё пиццу. <br /> Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src="./img/CartEmpty.jpg" alt="gg" />
            <Link to='/' className={style.back}>Вернуться на главную</Link>
        </div>
    );
}
