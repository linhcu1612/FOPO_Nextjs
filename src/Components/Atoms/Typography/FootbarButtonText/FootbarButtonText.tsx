import React from 'react';

import classes from './FootbarButtonText.module.css';

interface IProps {
  content: string;
}

export const FootbarButtonText = (props: IProps) => {
  return <h1 className={classes.FootbarButtonText}>{props.content}</h1>;
};
