import React from 'react';
import './ProductCard.scss';

export default function ProductCard() {
    return (
        <div class="card">
            <img src="./img/imgPizza/sirn.jpg" alt="gg" />
            <p class="nameP">Сырная</p>
            <div class="presc">
                <ul class="weight">
                    <li class="active">тонкое</li>
                    <li>традиционное</li>
                </ul>
                <ul class="size">
                    <li class="active">20 см.</li>
                    <li>30 см.</li>
                    <li>40 см.</li>
                </ul>
            </div>
            <div className="price">
                <p>от 450 Р</p>
                <span className="ad">+ Добавить</span>
            </div>
        </div>
    );
}
