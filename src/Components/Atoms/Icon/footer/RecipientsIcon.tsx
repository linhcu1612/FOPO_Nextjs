import React from 'react';

interface IProps {
  highlighted: boolean;
}

export const RecipientsIcon = (props: IProps) => {
  const {highlighted} = props;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={highlighted ? '#7ABF53' : '#fff'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.5 7.16C18.44 7.15 18.37 7.15 18.31 7.16C16.93 7.11 15.83 5.98 15.83 4.58C15.83 3.15 16.98 2 18.41 2C19.84 2 20.99 3.16 20.99 4.58C20.98 5.98 19.88 7.11 18.5 7.16Z"
        stroke={highlighted ? '#7ABF53' : '#99A5B2'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.4699 14.4402C18.8399 14.6702 20.3499 14.4302 21.4099 13.7202C22.8199 12.7802 22.8199 11.2402 21.4099 10.3002C20.3399 9.59016 18.8099 9.35016 17.4399 9.59016"
        stroke={highlighted ? '#7ABF53' : '#99A5B2'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.46998 7.16C6.52998 7.15 6.59998 7.15 6.65998 7.16C8.03998 7.11 9.13998 5.98 9.13998 4.58C9.13998 3.15 7.98998 2 6.55998 2C5.12998 2 3.97998 3.16 3.97998 4.58C3.98998 5.98 5.08998 7.11 6.46998 7.16Z"
        stroke={highlighted ? '#7ABF53' : '#99A5B2'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.49994 14.4402C6.12994 14.6702 4.61994 14.4302 3.55994 13.7202C2.14994 12.7802 2.14994 11.2402 3.55994 10.3002C4.62994 9.59016 6.15994 9.35016 7.52994 9.59016"
        stroke={highlighted ? '#7ABF53' : '#99A5B2'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 14.6302C12.44 14.6202 12.37 14.6202 12.31 14.6302C10.93 14.5802 9.82996 13.4502 9.82996 12.0502C9.82996 10.6202 10.98 9.47021 12.41 9.47021C13.84 9.47021 14.99 10.6302 14.99 12.0502C14.98 13.4502 13.88 14.5902 12.5 14.6302Z"
        stroke={highlighted ? '#7ABF53' : '#99A5B2'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.58997 17.7804C8.17997 18.7204 8.17997 20.2603 9.58997 21.2003C11.19 22.2703 13.81 22.2703 15.41 21.2003C16.82 20.2603 16.82 18.7204 15.41 17.7804C13.82 16.7204 11.19 16.7204 9.58997 17.7804Z"
        stroke={highlighted ? '#7ABF53' : '#99A5B2'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
