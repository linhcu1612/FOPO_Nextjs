import React from 'react';

import classes from './Header.module.css';

interface IProps {
  content: string;
}

export const Header = (props: IProps) => {
  return <h1 className={classes.header}>{props.content}</h1>;
};
