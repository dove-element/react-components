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
  rotate: PropTypes.bool,
};

Icon.defaultProps = {
  height: 30,
  width: 30,
  color: '406465',
  rotate: false,
};

function Icon({
  icon,
  height,
  width,
  style,
  className,
  color,
  rotate,
  ...props
}) {
  const SvgIcon = getIcon(icon);
  return (
    <SvgIcon
      height={height}
      width={width}
      className={classNames(
        styles.icon,
        { [styles.rotate]: rotate },
        className,
      )}
      style={{ fill: color, ...style }}
      {...props}
    />
  );
}

export default memo(Icon);
