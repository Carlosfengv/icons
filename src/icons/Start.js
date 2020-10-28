import React from 'react';
import PropTypes from 'prop-types';

const Start = props => {
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
        d="M18.124 12L6 19V5l12.124 7z"
      ></path>
    </svg>
  );
};

Start.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Start.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Start;
