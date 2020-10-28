import React from 'react';
import PropTypes from 'prop-types';

const Pause = props => {
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
        d="M5 4h4.667v16H5V4zm9.333 0H19v16h-4.667V4z"
      ></path>
    </svg>
  );
};

Pause.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Pause.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Pause;
