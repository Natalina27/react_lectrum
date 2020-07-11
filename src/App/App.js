import React from 'react';
import {News} from "../components/News/News";

import s from './App.module.scss';

export const App = () => {
    return (
        <div className={s.App}>
            <News />
        </div>
    );
}

