import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import fetchData from "../utils/fetch-data";
import constants from '../data/constants.js';

import "../App.css";

const { API_BASE_URL} = constants;

const User = () => {
  let { userId } = useParams();
  const [user, setUser] = useState({});
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchData(`${API_BASE_URL}/users/${userId}`, setUser);
    fetchData(`${API_BASE_URL}/users/${userId}/albums`, setAlbums);
  }, [userId]);
  
  return (
    <Container className="content">
      <Breadcrumb>
        <Breadcrumb.Item linkAs={ Link } linkProps={{ to: "/" }}>Users</Breadcrumb.Item>
        <Breadcrumb.Item active="true">{ user.name }</Breadcrumb.Item>
      </Breadcrumb>

      <Row>
        <Col>
          <div className="user-info">
            <h2>{ user.name }</h2>
            <p>
              { user.company?.name }<br />
              { user.email } <br />
              { user.address?.street } / { user.address?.city }
            </p>
          </div>
        </Col>
      </Row>

      <h2>Albums</h2>
      <Row xs={2} md={3} lg={4} xl={5}>
        { albums.map((album, i) => (
          <Col key={i}>
            <div className="album-list-item">
              <Link to={`${album.id}`}>{ album.title }</Link>
            </div>
          </Col>
        )) }
      </Row>
    </Container>
  );
};

export default User;
