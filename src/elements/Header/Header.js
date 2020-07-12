import * as React from 'react';
import {Tag} from "../Tag/Tag";

import s from './Header.module.scss';
import {Poster} from "../Poster/Poster";


export const Header = () => {
    return (
        <header>
            <Poster/>
            <div className={s.tags}>
                <Tag>Literature</Tag>
                <Tag>Books</Tag>
            </div>
        </header>
    );
};
