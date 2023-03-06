import React from 'react';

interface IProps {
  fill: string;
  stroke: string;
}

export const MenuIcon = (props: IProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={props.fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 7L21 7"
        stroke="#001F3E"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3 12H21"
        stroke="#001F3E"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3 17L11 17"
        stroke="#001F3E"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
