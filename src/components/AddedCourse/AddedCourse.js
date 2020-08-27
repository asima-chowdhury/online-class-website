import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import 'react-bootstrap';
import './AddedCourse.css';

const AddedCourse = (props) => {
    const addedCourse = props.addedCourse;
    // const totalPrice = addedCourse.reduce((sum, course) => sum + course.price,0);

    let totalPrice = 0;
    for (let i = 0; i < addedCourse.length; i++) {
        const course = addedCourse[i];
        console.log(course.price);
        totalPrice = totalPrice + parseFloat(course.price);
    }
    const fixedTotalPrice = totalPrice.toFixed(2);
    return (
        <div className="cart-container mt-4">
            <h3>Your Cart is <FontAwesomeIcon icon={faShoppingCart} /></h3>
            <h6>Added Course : {addedCourse.length}</h6>
            <h6>Total Price : <span>$</span>{fixedTotalPrice} </h6>
        </div>
    );
};

export default AddedCourse;