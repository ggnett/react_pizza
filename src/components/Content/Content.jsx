import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './Content.scss';

export default function Content() {
    const [list, setList] = React.useState([]);

    React.useEffect(() => {
        fetch('https://67eeff3fc11d5ff4bf7b8251.mockapi.io/items')
            .then((res) => res.json())
            .then((items) => {
                setList(items);
            });
    }, []);

    return (
        <div className="content">
            <p className="title">Все пиццы</p>
            <div className="cardPlace">
                {list.map((item, index) => (
                    <ProductCard key={index} {...item} />
                ))}
            </div>
        </div>
    );
}
