import React from 'react';

interface IProps {
  highlighted: boolean;
}

export const InviteIcon = (props: IProps) => {
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
        d="M9.5 22H15.5C20.5 22 22.5 20 22.5 15V9C22.5 4 20.5 2 15.5 2H9.5C4.5 2 2.5 4 2.5 9V15C2.5 20 4.5 22 9.5 22Z"
        stroke={highlighted ? '#fff' : '#99A5B2'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 9.6665C16.9665 9.6665 17.75 8.883 17.75 7.9165C17.75 6.95001 16.9665 6.1665 16 6.1665C15.0335 6.1665 14.25 6.95001 14.25 7.9165C14.25 8.883 15.0335 9.6665 16 9.6665Z"
        stroke={highlighted ? '#fff' : '#99A5B2'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 13.75C9.9665 13.75 10.75 12.9665 10.75 12C10.75 11.0335 9.9665 10.25 9 10.25C8.0335 10.25 7.25 11.0335 7.25 12C7.25 12.9665 8.0335 13.75 9 13.75Z"
        stroke={highlighted ? '#fff' : '#99A5B2'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 17.8335C16.9665 17.8335 17.75 17.05 17.75 16.0835C17.75 15.117 16.9665 14.3335 16 14.3335C15.0335 14.3335 14.25 15.117 14.25 16.0835C14.25 17.05 15.0335 17.8335 16 17.8335Z"
        stroke={highlighted ? '#fff' : '#99A5B2'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5109 12.8809L14.495 15.2025"
        stroke={highlighted ? '#fff' : '#99A5B2'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.4892 8.79736L10.5109 11.119"
        stroke={highlighted ? '#fff' : '#99A5B2'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
