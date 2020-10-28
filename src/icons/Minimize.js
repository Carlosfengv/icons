import React from 'react';
import PropTypes from 'prop-types';

const Minimize = props => {
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
        d="M8.296 17.118l-3.881 3.881L3 19.585l3.881-3.881L5.178 14H10v4.822l-1.704-1.704z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.704 17.118l-1.703 1.704V14h4.821l-1.703 1.704L21 19.585 19.586 21l-3.882-3.881z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.296 6.882L10 5.18V10H5.178l1.704-1.704-3.881-3.881L4.415 3l3.881 3.881z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.704 6.881L19.586 3 21 4.414l-3.881 3.882 1.703 1.703h-4.821V5.178l1.703 1.703z"
      ></path>
    </svg>
  );
};

Minimize.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Minimize.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Minimize;
