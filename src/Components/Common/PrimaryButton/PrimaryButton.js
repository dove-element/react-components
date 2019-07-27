import React, { memo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "../Button/Button";
import styles from "./PrimaryButton.module.scss";

PrimaryButton.propTypes = {
    className: PropTypes.string,
};

function PrimaryButton({ className, ...props }) {
    return <Button className={classNames(styles.primaryButton, className)} {...props} />;
}

export default memo(PrimaryButton);
