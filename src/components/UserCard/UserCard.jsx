import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as starFilled } from "@fortawesome/free-solid-svg-icons";
import { faStar as starOutlined } from "@fortawesome/free-regular-svg-icons";

import "./user-card.css";

const FavoriteButton = (props) => (
  <button
    onClick={() => props.clickHandler(props.userId)}
    className="favorites-button"
  >
    <FontAwesomeIcon icon={props.filled ? starFilled : starOutlined} />
  </button>
);

const UserCard = (props) => {
  return (
    <div className="user-card-content">
      <p>
        <Link to={`/${props.user.id}`}>
          <strong>{props.user.name}</strong>
        </Link>
        <br />
        { props.user.company.name }
        <br />
        <a href={props.user.email}>{props.user.email}</a>
        <FavoriteButton
          filled={props.user.isFavorite}
          clickHandler={props.handleFavoritesClick}
          userId={props.user.id}
        />
      </p>
    </div>
  );
};

export default UserCard;
