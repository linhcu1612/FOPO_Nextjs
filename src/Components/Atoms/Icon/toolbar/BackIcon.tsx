import React from 'react';

interface IProps {
  style?: React.CSSProperties;
  onclick?: () => void;
}

export const BackIcon = (props: IProps) => {
  const {style, onclick} = props;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      onClick={onclick}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5972 4.28869C17.0926 4.70802 17.1372 5.43039 16.6969 5.90214L11.0056 12L16.6969 18.0979C17.1372 18.5696 17.0926 19.292 16.5972 19.7113C16.1019 20.1306 15.3434 20.0882 14.9031 19.6164L8.50312 12.7593C8.09898 12.3263 8.09898 11.6737 8.50312 11.2407L14.9031 4.3836C15.3434 3.91184 16.1019 3.86935 16.5972 4.28869Z"
        fill="#001F3E"
      />
    </svg>
  );
};
