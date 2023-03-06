import React from 'react';

import classes from './CurrencyHeader.module.css';

interface IProps {
  content: string;
}

export const CurrencyHeader = (props: IProps) => {
  return <h1 className={classes.currencyHeader}>{props.content}</h1>;
};
