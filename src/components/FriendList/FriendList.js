import React from "react";
import PropTypes from "prop-types";

import FriendListItem from "./FriendListItem";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => (
  <>
    {friends.length > 0 ? (
      <ul className={styles.friendList}>
        {friends.map(({ id, name, avatar, isOnline }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </ul>
    ) : (
      <p className={styles.warning}>Nothing was transferred</p>
    )}
  </>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default FriendList;
