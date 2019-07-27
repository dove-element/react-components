import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import classNames from 'classnames';

const Button = ({ as: T, size, className, ...props }) => {
  return (
    <T
      className={classNames(styles.button, styles[size], className)}
      {...props}
    />
  );
};

Button.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Button.defaultProps = {
  as: 'button',
  size: 'medium',
};

export default memo(Button);
