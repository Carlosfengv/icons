import React from 'react';
import PropTypes from 'prop-types';

const ChevronDown = props => {
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
        d="M6.426 8L5 9.426l7 7 7-7L17.575 8 12 13.575 6.426 8z"
      ></path>
    </svg>
  );
};

ChevronDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChevronDown.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ChevronDown;
