import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import UserCard from "./UserCard/UserCard";
import { users } from "../data/users";

import "../App.css";

const ListUsers = ({ users, showFavorites }) =>
  users
    .filter((user) => (showFavorites ? user.isFavorite : !user.isFavorite))
    .map((user) => (
      <Col key={user.id}>
        <UserCard user={user} />
      </Col>
    ));

const Users = () => {
  return (
    <Container className="content">
      <Breadcrumb>
        <Breadcrumb.Item active="true">Users</Breadcrumb.Item>
      </Breadcrumb>

      <h1>Favorites</h1>
      <Row xs={2} md={3} lg={4} xl={5} className="userList">
        <ListUsers users={users} showFavorites={true} />
      </Row>

      <h1>Users</h1>
      <Row xs={2} md={3} lg={4} xl={5} className="userList">
        <ListUsers users={users} showFavorites={false} />
      </Row>
    </Container>
  );
};

export default Users;
