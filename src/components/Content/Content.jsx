import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Skeleton from '../Skeleton/Skeleton';
import './Content.scss';
import { searchContext } from '../../App';

export default function Content() {
    const [list, setList] = React.useState([]);
    const [isLoading, setisLoading] = React.useState(true);

    const { searchValue, search } = React.useContext(searchContext);

    React.useEffect(() => {
        setisLoading(true);
            fetch(`https://67eeff3fc11d5ff4bf7b8251.mockapi.io/items?${searchValue + search}`)
                .then((res) => res.json())
                .then((items) => {
                    Array.isArray(items) ? setList(items) : setList([]);
                    setisLoading(false);
                }).catch();

        window.scrollTo(0, 0);
    }, [searchValue, search]);

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
