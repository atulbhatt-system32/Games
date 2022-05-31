import React from "react";
import styles from "./Button.module.scss";

export default function Button(props) {
  const { classNames = [], onClick = () => {}, text = "Submit" } = props;
  const classes = [styles.button, ...classNames].join(" ");
  return (
    <button className={classes} onClick={onClick}>
      {text}
    </button>
  );
}
