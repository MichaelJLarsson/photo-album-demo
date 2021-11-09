import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as starFilled } from "@fortawesome/free-solid-svg-icons";
import { faStar as starOutlined } from "@fortawesome/free-regular-svg-icons";

import "./user-card.css";

const FavoriteIcon = (props) => (
  <FontAwesomeIcon
    icon={props.filled ? starFilled : starOutlined}
    className="favorites-icon"
  />
);

const UserCard = (props) => {
  return (
    <div className="user-card-content">
      <p>
        <Link to={`/${props.user.id}`}>
          <strong>{props.user.name}</strong>
        </Link>
        <br />
        {props.user.company}
        <br />
        <a href={props.user.email}>{props.user.email}</a>
        <FavoriteIcon filled={props.user.isFavorite} />
      </p>
    </div>
  );
};

export default UserCard;
