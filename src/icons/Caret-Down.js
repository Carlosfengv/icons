import React from 'react';
import PropTypes from 'prop-types';

const CaretDown = props => {
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
        d="M5 9l6.999 6.999L18.997 9H5z"
      ></path>
    </svg>
  );
};

CaretDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CaretDown.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CaretDown;
