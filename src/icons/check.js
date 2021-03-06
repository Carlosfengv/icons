import React from 'react';
import PropTypes from 'prop-types';

const Check = props => {
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
        d="M9.375 15.624L19 6l1.414 1.414L9.375 18.453 4 13.078l1.414-1.415 3.961 3.961z"
      ></path>
    </svg>
  );
};

Check.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Check.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Check;
