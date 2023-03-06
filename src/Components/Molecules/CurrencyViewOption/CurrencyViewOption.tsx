import {IconBtn} from '@Atoms/Button';
import {ListViewIcon, TableViewIcon} from '@Atoms/Icon';
import type {Dispatch, SetStateAction} from 'react';
import React from 'react';

import classes from './CurrencyViewOption.module.css';

interface IProps {
  currentView: String;
  setType: Dispatch<SetStateAction<string>>;
}

export const CurrencyViewOption = (props: IProps) => {
  const {currentView, setType} = props;

  const changeTypeTableHandler = () => {
    setType('table');
  };

  const changeTypeListHandler = () => {
    setType('list');
  };

  return (
    <div className={classes.listIconContainer}>
      <IconBtn
        Icon={ListViewIcon}
        highlighted={currentView === 'list'}
        buttonClassName={classes.iconWrapper}
        onclick={changeTypeListHandler}
      />
      <IconBtn
        Icon={TableViewIcon}
        highlighted={currentView === 'table'}
        buttonClassName={classes.iconWrapper}
        onclick={changeTypeTableHandler}
      />
    </div>
  );
};
