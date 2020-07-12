import * as React from 'react';
import {Header} from "../../elements/Header/Header";
import {Footer} from "../../elements/Footer/Footer";

import s from './Article.module.scss';


export const Article = () => {
    return (
        <div className={s.article}>
            <Header />
            <article>
                <h1>American writer of bad cowboy stories arrived in</h1>
                <p>Volunteering to help people in need combined with travelling to faraway places is
                    a new </p>
            </article>
            <Footer />
        </div>
    );
};
