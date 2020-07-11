import React from 'react';
import s from './Tag.module.scss';

export const Tag = ({children}) => {

    return <span className={s.tag}>{children}</span>
};
