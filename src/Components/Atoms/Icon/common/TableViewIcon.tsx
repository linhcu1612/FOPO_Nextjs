import React from 'react';

interface IProps {
  highlighted: boolean;
}

export const TableViewIcon = (props: IProps) => {
  const {highlighted} = props;

  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill={highlighted ? '#001F3E' : 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="11"
        height="11"
        rx="1.5"
        stroke={highlighted ? '#FFFFFF' : '#001F3E'}
      />
      <path d="M6 0V12" stroke={highlighted ? '#FFFFFF' : '#001F3E'} />
      <path d="M0 6L12 6" stroke={highlighted ? '#FFFFFF' : '#001F3E'} />
    </svg>
  );
};
