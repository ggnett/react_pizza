import * as React from 'react';

import style from './Search.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { filterUpd } from '../../redux/slices/searchSlice';
import  debounce from 'lodash.debounce';
import { RootState } from '../../redux/store';

export default function Search() {
    const dispatch = useDispatch();
    const val = useSelector((state:RootState) => state.search.filter);

    const [inpValue, setInpValue] = React.useState('');

    const inputRef = React.useRef<HTMLInputElement>(null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const filUpd = React.useCallback(
        debounce((e) => {
            dispatch(filterUpd(`&title=${e}`));
        }, 1000),
        []
    );

    React.useEffect(() => {
        setInpValue(val.substring(7));
    }, [val]);

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
                    dispatch(filterUpd(''));
                    inputRef.current?.focus();
                }}
                className={style.cross}
                src="./img/cross.svg"
                alt="gg"
            />
        </div>
    );
}
