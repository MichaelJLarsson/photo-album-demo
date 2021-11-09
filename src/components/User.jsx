import { Link, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { users } from '../data/users';

import "../App.css";

const User = () => {
  let { userId } = useParams();
  const user = users.find(item => item.id == userId);
  return (
    <Container className="content">
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Users</Breadcrumb.Item>
        <Breadcrumb.Item active="true">{ user.name }</Breadcrumb.Item>
      </Breadcrumb>

      <Row>
        <Col>
          <div className="user-info">
            <h2>{ user.name }</h2>
            <p>
              { user.company }<br />
              { user.email } <br />
              { user.address }
            </p>
          </div>
        </Col>
      </Row>

      <h2>Albums</h2>
      <Row xs={2} md={3} lg={4} xl={5}>
        { user.albums.map((album, i) => (
          <Col key={i}>
            <div className="album-list-item">
              <Link to={`${album.slug}`}>{ album.name }</Link>
            </div>
          </Col>
        )) }
      </Row>
    </Container>
  );
};

export default User;
