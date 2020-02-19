import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
        {friends.map(friend => (
        <li className={styles.item} key={friend.id}>
            <span className={friend.isOnline ? styles.isActive : styles.status}></span>
            <img className={styles.avatar} src={friend.avatar} alt="Foto" width="48" />
        <p className={styles.name}>{friend.name}</p>
        </li>
        ))}        
  </ul>
);

FriendList.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
  }),
  alt: PropTypes.string,
};

export default FriendList;
