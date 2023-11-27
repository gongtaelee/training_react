import React from 'react';

function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(friend => (
        <li key={friend.id}>{friend.name}{friend.age}</li>
      ))}
    </ul>
  );
}
export default FriendList;