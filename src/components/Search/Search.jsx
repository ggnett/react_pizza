import React from 'react';

import style from './Search.module.scss';
import { searchContext } from '../../App';

export default function Search() {
    const [inpValue, setInpValue] = React.useState('');

    const { search, setSearch} = React.useContext(searchContext);

    return (
        <div className={style.root}>
            <img className={style.search} src="./img/search.svg" alt="search" />
            <input
                value={inpValue}
                onChange={(i) => {
                    setInpValue(i.target.value);
                    setSearch(`&title=${inpValue}`)
                }}
                type="text"
                placeholder="Поиск..."
            />
            <img
                onClick={() => {
                    setInpValue('');
                    setSearch('');
                }}
                className={style.cross}
                src="./img/cross.svg"
                alt="gg"
            />
        </div>
    );
}
