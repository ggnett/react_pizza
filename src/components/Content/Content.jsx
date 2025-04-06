import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Skeleton from '../Skeleton/Skeleton';
import './Content.scss';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Pagination from '../Pagination/Pagination';

export default function Content() {
    const [list, setList] = React.useState([]);
    const [isLoading, setisLoading] = React.useState(true);

    const search = useSelector((state) => state.search);

    React.useEffect(() => {
        setisLoading(true);
        // fetch(`https://67eeff3fc11d5ff4bf7b8251.mockapi.io/items?${search.sort + search.catSort + search.filter}&p=${pagin + 1}&l=8`)
        //     .then((res) => res.json())
        //     .then((items) => {
        //         Array.isArray(items) ? setList(items) : setList([]);
        //         setisLoading(false);
        //     });

        axios
            .get(`https://67eeff3fc11d5ff4bf7b8251.mockapi.io/items?${search.sort + search.catSort + search.filter}&p=${search.pagInd + 1}&l=8`)
            .then((res) => {
                setList(res.data);
                setisLoading(false);
            })
            .catch((e) => {
                setList([]);
                setisLoading(false);
            });
        window.scrollTo(0, 0);
    }, [search]);

    return (
        <>
            <div className="content">
                <p className="title">Все пиццы</p>
                <div className="cardPlace">
                    {isLoading
                        ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
                        : list.map((item, index) => <ProductCard key={index} {...item} />)}
                </div>
            </div>
            <Pagination />
        </>
    );
}
