import * as React from 'react';
import s from './Article.module.scss';
import {Tag} from "../../elements/Tag/Tag";
import {CommentsCounter} from "../../elements/CommentsCounter/CommentsCounter";
import {LikeCounters} from "../../elements/LikesCounter/LikeCounters";


export const Article = () => {
    return (
        <div className={s.article}>
            <header>
                <div className={s.poster}>
                    <img src="https://miro.medium.com/max/1280/1*N6eYi8bOQ9tyZy8NGWDNKA.png"
                         alt=""/>
                </div>
                <div className={s.tags}>
                    <Tag>Literature</Tag>
                    <Tag>Books</Tag>
                </div>
            </header>
            <article>
                <h1>American writer of bad cowboy stories arrived in</h1>
                <p>Volunteering to help people in need combined with travelling to faraway places is
                    a new </p>
            </article>
            <footer>
                <span>15.07.2017</span>
                <div className={s.controls}>
                    <CommentsCounter>10</CommentsCounter>
                    <LikeCounters>315</LikeCounters>
                </div>
            </footer>
        </div>
    );
};
