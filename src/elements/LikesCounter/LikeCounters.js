import React from 'react';
import s from './LikeCounters.module.scss';

export const LikeCounters = ({children}) => {
    return <span className={s.likesCounter}>{children}</span>
};
