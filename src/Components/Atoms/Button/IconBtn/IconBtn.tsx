import classNames from 'classnames';
import type {FC} from 'react';
import React from 'react';

import classes from './IconBtn.module.css';

interface IconType {
  highlighted: boolean;
  className?: string;
}

interface IProps {
  Icon: FC<IconType>;
  buttonClassName?: string;
  onclick?: () => void;
  highlighted: boolean;
  header?: string;
}

export const IconBtn = (props: IProps) => {
  const {Icon, onclick, highlighted, header, buttonClassName} = props;
  return (
    <div className={buttonClassName} onClick={onclick}>
      <Icon highlighted={highlighted} />
      {header && (
        <p
          className={classNames(
            classes.iconSmallText,
            highlighted
              ? classes.iconSmallTextActive
              : classes.iconSmallTextDeactive
          )}
        >
          {header}
        </p>
      )}
    </div>
  );
};
