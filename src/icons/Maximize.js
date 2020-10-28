import React from 'react';
import PropTypes from 'prop-types';

const Maximize = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.296 7.118l-3.881 3.881L13 9.585l3.881-3.881L15.178 4H20v4.822l-1.704-1.704z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.704 7.118L4.001 8.822V4h4.821L7.118 5.704 11 9.585 9.586 11 5.704 7.118z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.704 16.881L9.586 13 11 14.414l-3.882 3.882 1.704 1.703H4.001v-4.821l1.703 1.703z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.296 16.882L20 15.178V20h-4.822l1.704-1.704-3.881-3.881L14.415 13l3.881 3.881z"
      ></path>
    </svg>
  );
};

Maximize.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Maximize.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Maximize;
