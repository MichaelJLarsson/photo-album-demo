import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

import "./album.css";

const Album = () => {
  return (
    <Container className="content">
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
          Users
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/user" }}>
          Tobias
        </Breadcrumb.Item>
        <Breadcrumb.Item active="true">Album title</Breadcrumb.Item>
      </Breadcrumb>

      <Row>
        <Col className="center">
          <h2>Album title</h2>
          <p>14 photos</p>
        </Col>
      </Row>

      <Row xs={2} md={3} lg={4} xl={5}>
        <Col>
          <div className="thumbnail">Photo</div>
        </Col>
        <Col>
          <div className="thumbnail">Photo</div>
        </Col>
        <Col>
          <div className="thumbnail">Photo</div>
        </Col>
        <Col>
          <div className="thumbnail">Photo</div>
        </Col>
        <Col>
          <div className="thumbnail">Photo</div>
        </Col>
        <Col>
          <div className="thumbnail">Photo</div>
        </Col>
        <Col>
          <div className="thumbnail">Photo</div>
        </Col>
        <Col>
          <div className="thumbnail">Photo</div>
        </Col>
        <Col>
          <div className="thumbnail">Photo</div>
        </Col>
        <Col>
          <div className="thumbnail">Photo</div>
        </Col>
        <Col>
          <div className="thumbnail">Photo</div>
        </Col>
        <Col>
          <div className="thumbnail">Photo</div>
        </Col>
        <Col>
          <div className="thumbnail">Photo</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Album;
