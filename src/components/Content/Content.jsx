import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Skeleton from '../Skeleton/Skeleton';
import './Content.scss';

export default function Content() {
    const [list, setList] = React.useState([]);
    const [isLoading, setisLoading] = React.useState(true);

    React.useEffect(() => {
        setisLoading(true);
        fetch('https://67eeff3fc11d5ff4bf7b8251.mockapi.io/items')
            .then((res) => res.json())
            .then((items) => {
                setList(items);
                setisLoading(false);
            });
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="content">
            <p className="title">Все пиццы</p>
            <div className="cardPlace">
                {isLoading
                    ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
                    : list.map((item, index) => <ProductCard key={index} {...item} />)}
            </div>
        </div>
    );
}
