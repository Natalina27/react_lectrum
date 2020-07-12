import * as React from 'react';
import {CommentsCounter} from "../CommentsCounter/CommentsCounter";
import {LikeCounters} from "../LikesCounter/LikeCounters";

import s from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer>
            <span>15.07.2017</span>
            <div className={s.controls}>
                <CommentsCounter>10</CommentsCounter>
                <LikeCounters>315</LikeCounters>
            </div>
        </footer>
    );
};
