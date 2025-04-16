import React from 'react';
import style from './Preload.module.scss';

export default function Preload() {
    return (
        <div className={style.root}>
            <img className={style.pre} src={`./img/preload.gif`} alt="preload" />
        </div>
    );
}
