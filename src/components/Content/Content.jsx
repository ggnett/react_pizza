import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Skeleton from '../Skeleton/Skeleton';
import './Content.scss';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Pagination from '../Pagination/Pagination';
import qs from 'qs';
import { useNavigate } from 'react-router';
import { sortUpd, catSortUpd, filterUpd, pagIndUpd } from '../../redux/slices/searchSlice';

export default function Content() {
    const [list, setList] = React.useState([]);
    const [isLoading, setisLoading] = React.useState(true);

    const search = useSelector((state) => state.search);
    const navigate = useNavigate();
    const dispatch = useDispatch();

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
    }, [search, search.filter, navigate, search.pagInd]);

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
        if (secondRef.current === true) {
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
        }
        window.scrollTo(0, 0);
        secondRef.current = true;
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
