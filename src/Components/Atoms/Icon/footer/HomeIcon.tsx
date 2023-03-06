import React from 'react';

interface IProps {
  highlighted: boolean;
}

export const HomeIcon = (props: IProps) => {
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
        d="M3.5 10.9563C3.5 9.72197 4.06989 8.55675 5.04424 7.79893L10.0442 3.91004C11.4887 2.78658 13.5113 2.78658 14.9558 3.91004L19.9558 7.79893C20.9301 8.55675 21.5 9.72197 21.5 10.9563V20C21.5 20.5304 21.2893 21.0391 20.9142 21.4142C20.5391 21.7893 20.0304 22 19.5 22H5.5C4.96957 22 4.46086 21.7893 4.08579 21.4142C3.71071 21.0391 3.5 20.5304 3.5 20V10.9563Z"
        stroke={highlighted ? '#fff' : '#99A5B2'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 22V15C9.5 13.3431 10.8431 12 12.5 12V12C14.1569 12 15.5 13.3431 15.5 15V22"
        stroke={highlighted ? '#fff' : '#99A5B2'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
