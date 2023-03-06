import {SubHeader} from '@Atoms/Typography';
import {CurrencyViewOption} from '@Molecules/CurrencyViewOption';
import React, {useState} from 'react';

import classes from './CurrencyList.module.css';

export const CurrencyList = () => {
  const [type, setType] = useState('table');

  return (
    <>
      <div className={classes.currencyListHeader}>
        <SubHeader content="Currency you want to exchange" />
        <CurrencyViewOption currentView={type} setType={setType} />
      </div>
      {/* <Grid container>
            {currencyData.map((item: any) => {
              return (
                <Grid item xs={type == 'table' ? 6 : 12} key={item.id}>
                  <Currency
                    flagIcon={item.flagIcon}
                    title={item.title}
                    price={item.price}
                    type={type}
                    increase={item.increase}
                    percentage={item.percentage}
                  />
                </Grid>
              );
            })}
          </Grid> */}
    </>
  );
};
