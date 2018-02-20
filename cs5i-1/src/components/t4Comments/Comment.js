import React from 'react';

const Comment = props => {
  return (
    <li>
      <h3>{props.username}</h3>
      <p>{props.text} </p>
    </li>
  );
};
export default Comment;
