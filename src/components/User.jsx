import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../App.css";

const User = () => {
  return (
    <Container className="content">
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
          Users
        </Breadcrumb.Item>
        <Breadcrumb.Item active="true">Tobias</Breadcrumb.Item>
      </Breadcrumb>

      <Row>
        <Col>
          <div className="user-info">
            <h2>Mikael Larsson</h2>
            <p>
              Bontouch <br />
              mikael.larsson@bontouch.com <br />
              Kungsgatan 55, 122 33 Stockholm
            </p>
          </div>
        </Col>
      </Row>

      <h2>Albums</h2>
      <Row xs={2} md={3} lg={4} xl={5}>
        <Col>
          <div className="album-list-item">
            <Link to="/album">My photo album!</Link>
          </div>
        </Col>
        <Col>
          <div className="album-list-item">
            <Link to="/album">My photo album!</Link>
          </div>
        </Col>
        <Col>
          <div className="album-list-item">
            <Link to="/album">My photo album!</Link>
          </div>
        </Col>
        <Col>
          <div className="album-list-item">
            <Link to="/album">My photo album!</Link>
          </div>
        </Col>
        <Col>
          <div className="album-list-item">
            <Link to="/album">My photo album!</Link>
          </div>
        </Col>
        <Col>
          <div className="album-list-item">
            <Link to="/album">My photo album!</Link>
          </div>
        </Col>
        <Col>
          <div className="album-list-item">
            <Link to="/album">My photo album!</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default User;
