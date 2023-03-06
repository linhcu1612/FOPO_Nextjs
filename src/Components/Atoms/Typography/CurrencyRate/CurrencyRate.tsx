import React from 'react';

import classes from './CurrencyRate.module.css';

interface IProps {
  content: string;
}

export const CurrencyRate = (props: IProps) => {
  return <h1 className={classes.currencyHeader}>{props.content}</h1>;
};
