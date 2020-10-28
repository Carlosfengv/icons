import React from 'react';
import PropTypes from 'prop-types';

const CaretRight = props => {
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
        d="M8.5 5.5l6.998 7L8.5 19.497V5.501z"
      ></path>
    </svg>
  );
};

CaretRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CaretRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CaretRight;
