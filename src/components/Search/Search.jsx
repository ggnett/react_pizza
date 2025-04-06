import React from 'react';

import style from './Search.module.scss';
import { useDispatch } from 'react-redux';
import { filterUpd } from '../../redux/slices/searchSlice';

export default function Search() {

    const dispatch = useDispatch();

    const [inpValue, setInpValue] = React.useState('');

    return (
        <div className={style.root}>
            <img className={style.search} src="./img/search.svg" alt="search" />
            <input
                value={inpValue}
                onChange={(i) => {
                    setInpValue(i.target.value);
                    dispatch(filterUpd(`&title=${inpValue}`))
                }}
                type="text"
                placeholder="Поиск..."
            />
            <img
                onClick={() => {
                    setInpValue('');
                    dispatch(filterUpd(''))
                }}
                className={style.cross}
                src="./img/cross.svg"
                alt="gg"
            />
        </div>
    );
}
