import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';
import classNames from 'classnames';

Input.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  as: 'input',
  size: 'medium',
  disabled: false,
};

function Input({ as: T, size, disabled, className, ...props }) {
  return (
    <T
      className={classNames(styles.input, styles[size], className)}
      aria-disabled={disabled}
      disabled={disabled}
      {...props}
    />
  );
}

export default memo(Input);
