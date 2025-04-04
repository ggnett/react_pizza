import React from 'react';
import { Link } from 'react-router';

import style from './NotFound.module.scss';

export default function NotFound() {
    return (
        <div className={style.root}>
            <p>
                <span>😕</span> <br /> Page not found
            </p>
            <Link to="/" className={style.back}>
                На главную
            </Link>
        </div>
    );
}
