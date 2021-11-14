import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import UserCard from "./UserCard/UserCard";
import { users as userData } from "../data/users";

import "../App.css";

const setStoredUsers = (users) => {
  localStorage.setItem('users', JSON.stringify(users));
}

const getStoredUsers = () => {
  return JSON.parse(localStorage.getItem('users'));
}

const Users = () => {
  const storedUsers = getStoredUsers();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setUsers(json);
      } catch (error) {
        console.warn('Error', error);
      }
    }
    fetchData();
  }, []);

  const updateFavorites = (userId) => {
    const updatedUsers = users.map((user) => {
      if (user.id === userId) {
        user.isFavorite = !user.isFavorite;
      }
      return user;
    });
    setUsers([...updatedUsers]);
    setStoredUsers(updatedUsers);
  };

  const ListUsers = ({ users, showFavorites }) => {
    return users
      .filter((user) => (showFavorites ? user.isFavorite : !user.isFavorite))
      .map((user) => (
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
