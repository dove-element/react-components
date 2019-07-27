import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import styles from './IconButton.module.scss';

const iconSize = {
  large: 40,
  small: 25,
};

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
};

IconButton.defaultProps = {
  iconColor: '406465',
};

function IconButton({ icon, iconColor, children, className, size, ...props }) {
  return (
    <Button
      className={classNames(styles.iconButton, className)}
      size={size}
      {...props}
    >
      {children}
      <Icon
        className={styles.icon}
        height={iconSize[size]}
        width={iconSize[size]}
        icon={icon}
        color={iconColor}
      />
    </Button>
  );
}

export default memo(IconButton);
