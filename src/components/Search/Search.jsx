import React from 'react';

import style from './Search.module.scss';
import { useDispatch } from 'react-redux';
import { filterUpd } from '../../redux/slices/searchSlice';
import debounce from 'lodash.debounce';

export default function Search() {
    const dispatch = useDispatch();

    const [inpValue, setInpValue] = React.useState('');

    const inputRef = React.useRef();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const filUpd = React.useCallback(
        debounce((e) => {
            dispatch(filterUpd(`&title=${e}`));
        }, 1000),
        []
    );

    return (
        <div className={style.root}>
            <img className={style.search} src="./img/search.svg" alt="search" />
            <input
                ref={inputRef}
                value={inpValue}
                onChange={(i) => {
                    setInpValue(i.target.value);
                    filUpd(i.target.value);
                }}
                type="text"
                placeholder="Поиск..."
            />
            <img
                onClick={() => {
                    setInpValue('');
                    dispatch(filterUpd(''));
                    inputRef.current.focus();
                }}
                className={style.cross}
                src="./img/cross.svg"
                alt="gg"
            />
        </div>
    );
}
