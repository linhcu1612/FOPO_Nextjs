import React from 'react';

import classes from './SubHeader.module.css';

interface IProps {
  content: string;
}

export const SubHeader = (props: IProps) => {
  return <h2 className={classes.subHeader}>{props.content}</h2>;
};
