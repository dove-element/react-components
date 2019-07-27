import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import classNames from 'classnames';

const Button = ({ as: T, size, disabled, className, ...props }) => {
  return (
    <T
      className={classNames(styles.button, styles[size], className)}
      aria-disabled={disabled}
      disabled={disabled}
      {...props}
    />
  );
};

Button.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  as: 'button',
  size: 'medium',
  disabled: false,
};

export default memo(Button);
