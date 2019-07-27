import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Icon.module.scss';
import { getIcon, availableIcons } from './iconHelper';

Icon.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  icon: PropTypes.oneOf(availableIcons).isRequired,
  color: PropTypes.string,
};
Icon.defaultProps = {
  height: 30,
  width: 30,
  color: '406465',
};
function Icon({ icon, height, width, style, className, color, ...props }) {
  const Component = getIcon(icon);
  return (
    <Component
      height={height}
      width={width}
      className={classNames(styles.icon, className)}
      style={{ fill: color, ...style }}
      {...props}
    />
  );
}

export default memo(Icon);
