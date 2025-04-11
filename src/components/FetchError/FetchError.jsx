import React from 'react';
import style from './FetchError.module.scss';

export default function Empty() {
    return (
        <div className={style.root}>
            <p>
                <span>😕</span> <br />
            </p>
            <p className={style.presc}>Ошибка при запросе данных, попробуйте позднее</p>
        </div>
    );
}
