import React from 'react';

interface IProps {
  highlighted: boolean;
}

export const RateIcon = (props: IProps) => {
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
        d="M22.5 13V9C22.5 4 20.5 2 15.5 2H9.5C4.5 2 2.5 4 2.5 9V15C2.5 20 4.5 22 9.5 22H13.5"
        stroke={highlighted ? '#fff' : '#99A5B2'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.82996 14.4898L10.21 11.3998C10.55 10.9598 11.18 10.8798 11.62 11.2198L13.45 12.6598C13.89 12.9998 14.52 12.9198 14.86 12.4898L17.17 9.50977"
        stroke={highlighted ? '#fff' : '#99A5B2'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.98 15.8199L20.26 16.3899C20.4 16.6699 20.75 16.9299 21.06 16.9899L21.44 17.0499C22.58 17.2399 22.85 18.0799 22.03 18.9099L21.68 19.2599C21.45 19.4999 21.32 19.9599 21.39 20.2799L21.44 20.4899C21.75 21.8699 21.02 22.3999 19.82 21.6799L19.56 21.5299C19.25 21.3499 18.75 21.3499 18.44 21.5299L18.18 21.6799C16.97 22.4099 16.24 21.8699 16.56 20.4899L16.6099 20.2799C16.6799 19.9599 16.55 19.4999 16.32 19.2599L15.97 18.9099C15.15 18.0799 15.42 17.2399 16.56 17.0499L16.94 16.9899C17.24 16.9399 17.6 16.6699 17.74 16.3899L18.02 15.8199C18.56 14.7299 19.44 14.7299 19.98 15.8199Z"
        stroke={highlighted ? '#fff' : '#99A5B2'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
