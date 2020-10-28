import React from 'react';
import PropTypes from 'prop-types';

const Refresh = props => {
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
        d="M14.95 4.626l-.743 1.857a5.94 5.94 0 103.704 6.108l1.99.2a7.94 7.94 0 11-4.951-8.165z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.99 2.037L18.137 7.1l-5.062 2.15 2.913-7.212z"
      ></path>
    </svg>
  );
};

Refresh.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Refresh.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Refresh;
