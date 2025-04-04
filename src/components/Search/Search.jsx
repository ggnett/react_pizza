import React from 'react';

import style from './Search.module.scss'


export default function Search() {
    return (
        <div className={style.root}>
            <img className={style.search} src="./img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
            <img className={style.cross} src="./img/cross.svg" alt="gg" />
        </div>
    );
}
