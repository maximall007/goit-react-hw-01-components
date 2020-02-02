import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';

const FriendListItem = ({ friend, alt }) => (
  <li className={s.item}>
    <span className={friend.isOnline === true ? s.onLine : s.offLine} />
    <img className={s.avatar} src={friend.avatar} alt={alt} width="80" />
    <p className={s.name}>{friend.name}</p>
  </li>
);

FriendListItem.defaultProps = {
  friend: {},
  alt: 'avatar',
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
  }),
  alt: PropTypes.string,
};

export default FriendListItem;
