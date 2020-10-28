import React from 'react';
import PropTypes from 'prop-types';

const Stop = props => {
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
      <rect x="6" y="6" width="12" height="12"></rect>
    </svg>
  );
};

Stop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Stop.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Stop;
