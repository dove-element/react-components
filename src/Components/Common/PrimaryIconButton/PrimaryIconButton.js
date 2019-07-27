import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import IconButton from '../IconButton/IconButton';
import styles from './PrimaryIconButton.module.scss';

PrimaryIconButton.propTypes = {
  icon: PropTypes.string.isRequired,
};

function PrimaryIconButton({ ...props }) {
  return (
    <IconButton
      className={classNames(styles.primaryIconButton, props.className)}
      {...props}
      iconColor="ffffff"
    />
  );
}

export default memo(PrimaryIconButton);
