import React from "react";
import PropTypes from "prop-types";

import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClasses = isOnline ? styles.online : styles.offline;
  return (
    <li className={styles.item}>
      <span className={statusClasses}></span>
      <img src={avatar} alt={name} className={styles.avatar} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
