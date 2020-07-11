import * as React from 'react';
import s from './News.module.scss';
import {Article} from "../Article/Article";

export const News = () => {
    return (
        <div className={s.news}>
            <Article/>
            <Article/>
            <Article/>
        </div>
    );
};
