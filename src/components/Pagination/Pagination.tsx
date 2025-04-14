import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pagIndUpd } from '../../redux/slices/searchSlice';

import style from './Pagination.module.scss';
import { RootState } from '../../redux/store';

export default function Pagination() {
    const pagin = useSelector((state:RootState) => state.search.pagInd);
    const dispatch = useDispatch();

    function pagArrow1() {
        pagin > 0 ? dispatch(pagIndUpd(pagin - 1)) : dispatch(pagIndUpd(0));
    }

    function pagArrow2() {
        pagin < 1 ? dispatch(pagIndUpd(pagin + 1)) : dispatch(pagIndUpd(1));
    }

    return (
        <ul className={style.pagination}>
            <li onClick={pagArrow1}>{'<'}</li>
            {[...new Array(2)].map((_, index) => (
                <li key={index} className={index === pagin ? style.pagActive : ''} onClick={() => dispatch(pagIndUpd(index))}>
                    {index + 1}
                </li>
            ))}
            <li onClick={pagArrow2}>{'>'}</li>
        </ul>
    );
}
