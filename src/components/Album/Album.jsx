import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useParams } from "react-router-dom";
import constants from '../../data/constants.js';
import fetchData from "../../utils/fetch-data";
import classNames from "classnames";

import "./album.css";

const { API_BASE_URL} = constants;

const Album = () => {
  let { userId, albumId } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [user, setUser] = useState({});
  const [album, setAlbum] = useState({});
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchData(`${API_BASE_URL}/users/${userId}`, setUser);
    fetchData(`${API_BASE_URL}/albums/${albumId}`, setAlbum);
    fetchData(`${API_BASE_URL}/albums/${albumId}/photos`, setPhotos);
  }, [userId, albumId]);

  const hideLightBox = () => setIsOpen(false);
  
  const openLightBox = (photoId) => {
    const image = photos.find(photo => photo.id === photoId);
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
        <Breadcrumb.Item active="true">{ album.title }</Breadcrumb.Item>
      </Breadcrumb>

      <Row>
        <Col className="center">
          <h2>{ album.title }</h2>
          <p>{ photos.length } photos</p>
        </Col>
      </Row>

      <Row xs={2} md={3} lg={4} xl={5}>
        { photos.map((photo) => (
          <Col key={ photo.id }>
            <div className="thumbnail">
              <img src={ photo.thumbnailUrl } alt="" onClick={() => openLightBox(photo.id)} />
            </div>
          </Col>
        )) }
      </Row>

      <div className={classNames('lightBox', { open: isOpen })} onClick={ hideLightBox }>
        <div className="imageContainer">
          <img src={`${currentImage.url}`} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Album;
