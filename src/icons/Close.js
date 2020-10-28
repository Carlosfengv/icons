import React from 'react';
import PropTypes from 'prop-types';

const Close = props => {
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
        d="M19.071 6.343L17.657 4.93 12 10.586 6.343 4.929 4.93 6.343 10.586 12l-5.657 5.657 1.414 1.414L12 13.414l5.657 5.657 1.414-1.414L13.414 12l5.657-5.657z"
      ></path>
    </svg>
  );
};

Close.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Close.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Close;
