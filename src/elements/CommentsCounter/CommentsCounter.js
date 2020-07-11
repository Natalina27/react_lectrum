import React from 'react';
import s from './CommentsCounter.module.scss';

export const CommentsCounter = ({children}) => {
    return (
        <span className={s.commentsCounter}>{children}</span>
    );
};
