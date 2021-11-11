import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useParams } from "react-router-dom";
import { users } from '../../data/users';

import "./album.css";

const Album = () => {
  let { userId, albumSlug } = useParams();
  // eslint-disable-next-line
  const user = users.find(item => item.id == userId);
  // eslint-disable-next-line
  const album = user.albums.find(album => album.slug == albumSlug);

  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const hideLightBox = () => setIsOpen(false);
  const openLightBox = (index) => {
    const image = album.photos[index];
    setCurrentImage(image);
    setIsOpen(true);
  }
  
  return (
    <Container className="content albumn">
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
          Users
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: `/${userId}` }}>
          { user.name }
        </Breadcrumb.Item>
        <Breadcrumb.Item active="true">{ album.name }</Breadcrumb.Item>
      </Breadcrumb>

      <Row>
        <Col className="center">
          <h2>{ album.name }</h2>
          <p>{ album.photos.length } photos</p>
        </Col>
      </Row>

      <Row xs={2} md={3} lg={4} xl={5}>
        { album.photos.map((photo, index) => (
          <Col key={ index }>
            <div className="thumbnail">
              <img src={ `${photo}/240/200/` } alt="" onClick={() => openLightBox(index)} />
            </div>
          </Col>
        )) }
      </Row>

      { isOpen && (
        <div className="lightBox" onClick={ hideLightBox }>
          <div className="imageContainer">
            <img src={`${currentImage}/800/500/`} alt="" />
          </div>
        </div>
      ) }
    </Container>
  );
};

export default Album;
