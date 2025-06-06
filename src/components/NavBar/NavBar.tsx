import * as React from 'react';
import './NavBar.scss';
import cn from 'classnames';

import { useDispatch, useSelector } from 'react-redux';
import { sortUpd, catSortUpd, pagIndUpd } from '../../redux/slices/searchSlice';
import { RootState } from '../../redux/store';

const list = ['популярности', 'цене', 'алфавиту'];
const listMok = ['rating', 'price', 'title'];

let sortName = '';

export default function NavBar() {
    const dispatch = useDispatch();
    const catSort = useSelector((state:RootState) => state.search.catSort);

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

    const [visible, setVisible] = React.useState(false);

    const [namePopup, setNamePopup] = React.useState(0);

    const sortRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const popupVisibleHundler = (event:any) => {
            if (!event.composedPath().includes(sortRef.current)) {
                setVisible(false);
            }
        };

        document.body.addEventListener('click', popupVisibleHundler);
        return () => document.body.removeEventListener('click', popupVisibleHundler);
    }, []);

    return (
        <div className="navBar">
            <ul className="categories">
                {categories.map((item, index) => (
                    <li
                        key={index}
                        onClick={() => {
                            index === 0 ? (sortName = '') : (sortName = `&category=${index}`);
                            dispatch(catSortUpd(sortName));
                            dispatch(pagIndUpd(0));
                        }}
                        className={cn(Number(catSort.substring(10)) === index ? 'active' : '')}
                    >
                        {item}
                    </li>
                ))}
            </ul>

            <div className="sort" ref={sortRef}>
                <div className="sort__label">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                            fill="#2C2C2C"
                        />
                    </svg>
                    <b>Сортировка по:</b>
                    <span onClick={() => setVisible((prev) => (prev ? false : true))}>{list[namePopup]}</span>
                </div>
                {visible && (
                    <div className="sort__popup">
                        <ul>
                            {list.map((item, index) => (
                                <li
                                    key={index}
                                    onClick={() => {
                                        setNamePopup(index);
                                        setVisible(!visible);
                                        dispatch(sortUpd(`&sortBy=${listMok[index]}`));
                                    }}
                                    className={namePopup === index ? 'active' : ''}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
