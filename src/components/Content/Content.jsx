import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './Content.scss';

import pizzas from '../../assets/pizza.json';

export default function Content() {
    return (
        <div className="content">
            <p className="title">Все пиццы</p>
            <div className="cardPlace">
                {pizzas.map((item, index) => (
                    <ProductCard key={item.id} name={item.name} imageUrl={item.imageUrl} price={item.price} />
                ))}
            </div>
        </div>
    );
}
