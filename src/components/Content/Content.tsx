import * as React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Skeleton from '../Skeleton/Skeleton';
import FetchError from '../FetchError/FetchError';

import './Content.scss';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '../Pagination/Pagination';
import * as qs from 'qs';
import { useNavigate } from 'react-router';
import { sortUpd, catSortUpd, filterUpd, pagIndUpd } from '../../redux/slices/searchSlice';
import { addItems, fetchPizzaByUrl } from '../../redux/slices/pizzaSlice';
import { AppDispatch, RootState } from '../../redux/store';

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

export default function Content() {
    const search:any = useSelector((state: RootState) => state.search);
    const items = useSelector((state: RootState) => state.pizza.items);
    const isLoading = useSelector((state: RootState) => state.pizza.isLoading);

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    // ne vstavliaem v stroku pro 1st rendere
    const firstRend = React.useRef(false);

    // ubiraem zadvoeiniy render izza updeita steita
    const secondRef = React.useRef(true);

    //sozdanie i prokidivanie v stroku url
    React.useEffect(() => {
        if (firstRend.current === true) {
            const qString = qs.stringify({
                sortBy: search.sort.substring(8),
                category: search.catSort.substring(10),
                title: search.filter,
                p: search.pagInd + 1,
                l: 8,
            });
            navigate(`?${qString}`);
        }
        firstRend.current = true;
    }, [search, navigate]);

    // obnovlenie steita iz stroki url
    React.useEffect(() => {
        if (window.location.search !== '') {
            const params = qs.parse(String(window.location.search).substring(1));
            dispatch(sortUpd(`&sortBy=${params.sortBy}`));
            dispatch(catSortUpd(`&category=${params.category}`));
            dispatch(filterUpd(`${params.title}`));
            dispatch(pagIndUpd(Number(params.p) - 1));
            secondRef.current = false;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    React.useEffect(() => {
        const fetchPizza = async () => {
            try {
                const data = await dispatch(fetchPizzaByUrl(search));
                dispatch(addItems(data.payload));
            } catch (e) {
                console.log(e);
                dispatch(addItems([]));
            }
        };
        if (secondRef.current === true) {
            fetchPizza();
        }
        window.scrollTo(0, 0);
        secondRef.current = true;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    return (
        <>
            <div className="content">
                <p className="title">{categories[Number(search.catSort.substring(10))]} пиццы </p>
                <div className="cardPlace">
                    {isLoading === 'pending' ? (
                        [...new Array(8)].map((_, index) => <Skeleton key={index} />)
                    ) : isLoading === 'resolve' ? (
                        items.map((item: any, index: number) => <ProductCard key={index} {...item} />)
                    ) : (
                        <FetchError />
                    )}
                </div>
            </div>
            <Pagination />
        </>
    );
}
