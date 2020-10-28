import React from 'react';
import PropTypes from 'prop-types';

const Add = props => {
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
        d="M13 4h-2v7H4v2h7v7h2v-7h7v-2h-7V4z"
      ></path>
    </svg>
  );
};

Add.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Add.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Add;
