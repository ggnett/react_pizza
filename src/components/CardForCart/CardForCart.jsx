import React from 'react';

import style from './CardForCart.module.scss';

export default function CardForCart() {
    return (
        <div className={style.root}>
            <img className={style.pizza} src="./img/imgPizza/sirn.jpg" alt="gg" />
            <p className={style.name}>
                Сырный цыпленок <br />
                <span>тонкое тесто, 26 см.</span>
            </p>
            <p className={style.numb}>
                <span className={style.circle}>-</span>1<span className={style.circle}>+</span>
            </p>
            <p className={style.price}>770 Р</p>
            <p className={[style.circle, style.last].join(' ')}>x</p>
        </div>
    );
}
