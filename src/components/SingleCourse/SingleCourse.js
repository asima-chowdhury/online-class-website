import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { Button, Card } from 'react-bootstrap';
import '../../assets/css/bootstrap.min.css'
import './SingleCourse.css';

const SingleCourse = (props) => {
    const { img, courseName, courseDetails, instructor, price } = props.course;

    const handlerAddCourse = props.handlerAddCourse;
    console.log(props);

    return (
        <div className="col-xl-4 col-lg-4 col-md-4 my-3">
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{courseName}</Card.Title>
                    <Card.Text>{courseDetails}</Card.Text>
                    <Card.Text><small className="text-muted">Instructor : {instructor}</small></Card.Text>
                    <Card.Text>$ {price}</Card.Text>
                    <Card.Text>
                        <div className="star-icon">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalf} />
                        </div> 4.5 (6057 reviews)
                        </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="outline-info" onClick={() => handlerAddCourse(props.course)}><FontAwesomeIcon icon={faShoppingCart} /> Enroll Now!</Button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default SingleCourse;