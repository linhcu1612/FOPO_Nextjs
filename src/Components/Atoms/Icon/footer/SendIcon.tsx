import React from 'react';

interface IProps {
  style?: React.CSSProperties;
}

export const SendIcon = (props: IProps) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={props.style}
    >
      <rect width="40" height="40" rx="12" fill="#7ABF53" />
      <path
        d="M17.5 21.7502C17.5 22.7202 18.25 23.5002 19.17 23.5002H21.05C21.85 23.5002 22.5 22.8202 22.5 21.9702C22.5 21.0602 22.1 20.7302 21.51 20.5202L18.5 19.4702C17.91 19.2602 17.51 18.9402 17.51 18.0202C17.51 17.1802 18.16 16.4902 18.96 16.4902H20.84C21.76 16.4902 22.51 17.2702 22.51 18.2402"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 15.5V24.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 20C30 25.52 25.52 30 20 30C14.48 30 10 25.52 10 20C10 14.48 14.48 10 20 10"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 14V10H26"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 15L30 10"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
