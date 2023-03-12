/** @format */

import {Typography} from '@mui/material';
import React from 'react';
import styled from 'styled-components';

import classes from './Loader.module.css';

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(theme: any) => theme.background};
`;

interface IProps {
  quote: string;
}

const Loader = (props: IProps) => {
  return (
    <Background>
      <div className={classes.lds_spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Typography
        variant="h1"
        component="div"
        gutterBottom
        className={classes.quote}
      >
        {props.quote}
      </Typography>
    </Background>
  );
};

export default Loader;
