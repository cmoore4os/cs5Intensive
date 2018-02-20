import React, { Component } from 'react';
import Comment from './Comment';
const comments = [
  {
    username: 'twitch',
    text: 'Epic Street Fighter action here in Las Vegas at #EVO2017!'
  },
  {
    username: 'michaelmarzetta',
    text: 'Omg that match was crazy'
  },
  {
    username: 'themexican_leprechaun',
    text: 'What a setup'
  },
  {
    username: 'dennis_futbol',
    text: 'It that injustice'
  },
  {
    username: 'dennis_futbol',
    text: 'Is'
  }
];

export default class Comments extends Component {
  state = {
    comments: comments
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.comments.map((comment, index) => {
            return (
              <Comment
                username={comment.username}
                text={comment.text}
                key={index}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
