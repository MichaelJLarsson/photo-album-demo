import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import UserCard from "./UserCard/UserCard";
import { users as usersData } from "../data/users";

import "../App.css";

const Users = () => {
  const [users, setUsers] = useState(usersData);

  const updateFavorites = (userId) => {
    const updatedUsers = users.map((user) => {
      if (user.id === userId) {
        user.isFavorite = !user.isFavorite;
      }
      return user;
    });
    setUsers([...updatedUsers]);
  };

  const ListUsers = ({ users, showFavorites }) => {
    return users
      .filter((user) => (showFavorites ? user.isFavorite : !user.isFavorite))
      .map((user, index) => (
        <Col key={user.id}>
          <UserCard user={user} handleFavoritesClick={updateFavorites} />
        </Col>
      ));
  };

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
