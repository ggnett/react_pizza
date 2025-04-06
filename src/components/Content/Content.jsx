import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Skeleton from '../Skeleton/Skeleton';
import './Content.scss';
import {useSelector} from 'react-redux'

export default function Content() {
    const [list, setList] = React.useState([]);
    const [isLoading, setisLoading] = React.useState(true);
    const [pagin, setPagin] = React.useState(0);

    const search = useSelector(state => state.search)

    React.useEffect(() => {
        setisLoading(true);
        fetch(`https://67eeff3fc11d5ff4bf7b8251.mockapi.io/items?${search.sort+search.catSort+search.filter}&p=${pagin + 1}&l=8`)
            .then((res) => res.json())
            .then((items) => {
                Array.isArray(items) ? setList(items) : setList([]);
                setisLoading(false);
            });
        window.scrollTo(0, 0);
    }, [search, pagin]);

    function pagArrow1() {
        pagin > 0 ? setPagin((prev) => prev - 1) : setPagin(0);
    }

    function pagArrow2() {
        pagin < 2 ? setPagin((prev) => prev + 1) : setPagin(2);
    }

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
            <>
                <ul className={'pagination'}>
                    <li onClick={pagArrow1}>{'<'}</li>
                    {[...new Array(2)].map((_, index) => (
                        <li key={index} className={index === pagin ? 'pag-active' : ''} onClick={() => setPagin(index)}>
                            {index + 1}
                        </li>
                    ))}
                    <li onClick={pagArrow2}>{'>'}</li>
                </ul>
            </>
        </>
    );
}
