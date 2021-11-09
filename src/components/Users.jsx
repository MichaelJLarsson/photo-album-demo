import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import UserCard from "./UserCard/UserCard";

import "../App.css";

const Users = () => {
  return (
    <Container className="content">
      <Breadcrumb>
        <Breadcrumb.Item active="true">Users</Breadcrumb.Item>
      </Breadcrumb>

      <h1>Favorites</h1>
      <Row xs={2} md={3} lg={4} xl={5} className="userList">
        <Col>
          <UserCard
            user={{
              name: "Mikael Larsson",
              company: "Bontouch AB",
              email: "mikael.larsson@bontouch.com",
              isFavorite: true,
            }}
          />
        </Col>
      </Row>

      <h1>Users</h1>
      <Row xs={2} md={3} lg={4} xl={5} className="userList">
        <Col>
          <UserCard
            user={{
              name: "Mikael Larsson",
              company: "Bontouch AB",
              email: "mikael.larsson@bontouch.com",
              isFavorite: false,
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Users;
