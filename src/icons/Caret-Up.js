import React from 'react';
import PropTypes from 'prop-types';

const CaretUp = props => {
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
        d="M5 15.999L11.999 9l6.998 6.999H5z"
      ></path>
    </svg>
  );
};

CaretUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CaretUp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CaretUp;
