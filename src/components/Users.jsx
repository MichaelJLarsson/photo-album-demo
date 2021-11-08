import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as starIconOutlined } from '@fortawesome/free-regular-svg-icons';

const StarFilled = props => <FontAwesomeIcon icon={faStar} {...props} />
const StarOutlined = () => <FontAwesomeIcon icon={starIconOutlined} />

const Users = (props) => {
    return (
        <Container { ...props }>
            <Breadcrumb>
                <Breadcrumb.Item active="true">Users</Breadcrumb.Item>
            </Breadcrumb>

            <h1>Favorites</h1>
            <Row xs={2} md={3} lg={4} xl={5} className="userList">
                <Col>
                    <div className="user-card-content">
                        <p><strong>Tobias</strong><br />
                        Bontouch AB <br />
                        <a href="tobias.arfors@bontouch.com">tobias.arfors@bontouch.com</a>
                        <StarFilled className="favorites-icon" />
                        </p>
                    </div>
                </Col>
                <Col>
                    <div className="user-card-content">
                        <p><strong>Tobias</strong><br />
                        Bontouch AB <br />
                        <a href="tobias.arfors@bontouch.com">tobias.arfors@bontouch.com</a>
                        <StarFilled className="favorites-icon" />
                        </p>
                    </div>
                </Col>
                <Col>
                    <div className="user-card-content">
                        <p><strong>Tobias</strong><br />
                        Bontouch AB <br />
                        <a href="tobias.arfors@bontouch.com">tobias.arfors@bontouch.com</a>
                        <StarFilled className="favorites-icon" />
                        </p>
                    </div>
                </Col>
            </Row>
            <h1>Users</h1>
            <Row xs={2} md={3} lg={4} xl={5} className="userList">
                <Col>
                    <div className="user-card-content">
                        <p><strong>Tobias</strong><br />
                        Bontouch AB <br />
                        <a href="tobias.arfors@bontouch.com">tobias.arfors@bontouch.com</a>
                        <StarOutlined className="favorites-icon" />
                        </p>
                    </div>
                </Col>
                <Col>
                    <div className="user-card-content">
                        <p><strong>Tobias</strong><br />
                        Bontouch AB <br />
                        <a href="tobias.arfors@bontouch.com">tobias.arfors@bontouch.com</a>
                        <StarOutlined className="favorites-icon" />
                        </p>
                    </div>
                </Col>
                <Col>
                    <div className="user-card-content">
                        <p><strong>Tobias</strong><br />
                        Bontouch AB <br />
                        <a href="tobias.arfors@bontouch.com">tobias.arfors@bontouch.com</a>
                        <StarOutlined className="favorites-icon" />
                        </p>
                    </div>
                </Col>
                <Col>
                    <div className="user-card-content">
                        <p><strong>Tobias</strong><br />
                        Bontouch AB <br />
                        <a href="tobias.arfors@bontouch.com">tobias.arfors@bontouch.com</a>
                        <StarOutlined className="favorites-icon" />
                        </p>
                    </div>
                </Col>
                <Col>
                    <div className="user-card-content">
                        <p><strong>Tobias</strong><br />
                        Bontouch AB <br />
                        <a href="tobias.arfors@bontouch.com">tobias.arfors@bontouch.com</a>
                        <StarOutlined className="favorites-icon" />
                        </p>
                    </div>
                </Col>
                <Col>
                    <div className="user-card-content">
                        <p><strong>Tobias</strong><br />
                        Bontouch AB <br />
                        <a href="tobias.arfors@bontouch.com">tobias.arfors@bontouch.com</a>
                        <StarOutlined className="favorites-icon" />
                        </p>
                    </div>
                </Col>
                <Col>
                    <div className="user-card-content">
                        <p><strong>Tobias</strong><br />
                        Bontouch AB <br />
                        <a href="tobias.arfors@bontouch.com">tobias.arfors@bontouch.com</a>
                        <StarOutlined className="favorites-icon" />
                        </p>
                    </div>
                </Col>
                <Col>
                    <div className="user-card-content">
                        <p><strong>Tobias</strong><br />
                        Bontouch AB <br />
                        <a href="tobias.arfors@bontouch.com">tobias.arfors@bontouch.com</a>
                        <StarOutlined className="favorites-icon" />
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
            
    );
}

export default Users;
