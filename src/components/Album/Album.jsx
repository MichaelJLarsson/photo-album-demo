import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useParams } from "react-router-dom";

import "./album.css";

const Album = () => {
  let { userId, albumId } = useParams();

  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [user, setUser] = useState({});
  const [album, setAlbum] = useState({});
  const [photos, setPhotos] = useState([]);

  /**
   * Fetch user
   */
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setUser(json);
      } catch (error) {
        console.warn('Error', error);
      }
    }
    fetchData();
  }, [userId]);

  /**
   * Fetch album
   */
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/albums/${albumId}`;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setAlbum(json);
      } catch (error) {
        console.warn('Error', error);
      }
    }
    fetchData();
  }, [albumId]);
  
  /**
   * Fetch photos
   */
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log('json response', json);
        setPhotos(json);
      } catch (error) {
        console.warn('Error', error);
      }
    }
    fetchData();
  }, [userId, albumId]);

  const hideLightBox = () => setIsOpen(false);
  
  const openLightBox = (photoId) => {
    const image = photos.find(photo => photo.id === photoId);
    setCurrentImage(image);
    setIsOpen(true);
  }

  console.log('user', user);
  console.log('album', album);
  console.log('photos', photos);
  
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
          <p>{ photos.length } photos</p>
        </Col>
      </Row>

      <Row xs={2} md={3} lg={4} xl={5}>
        { photos.map((photo, index) => (
          <Col key={ index }>
            <div className="thumbnail">
              <img src={ photo.thumbnailUrl } alt="" onClick={() => openLightBox(photo.id)} />
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
