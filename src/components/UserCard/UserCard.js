import React, { Component } from "react";
import "./UserCard.css";

class UserCard extends Component {
  render() {
    const { email, username, image } = this.props;

    return (
      <div className="UserCard">
        <div className="UserCard__image">
          <img className="UserCard__image__img" src={image} alt="something" />
        </div>
        <div className="UserCard__content">
          <div className="UserCard__content__email">{email}</div>
          <div className="UserCard__content__username">{username}</div>
        </div>
      </div>
    );
  }
}

export default UserCard;