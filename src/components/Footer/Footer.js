import React from 'react';
import logo from '../../images/logo.png';
import 'react-bootstrap';
import '../../assets/css/bootstrap.min.css'
import './Footer.css'

const Footer = () => {
    return (

        <div class="footer-area">
            <div class="container ">
                <div class="row">
                    <div class="col-sm-6 col-md-6 col-6">
                        <img src={logo} />
                        <p>Millions of people of all ages and from around the world are improving their lives with us</p>
                    </div>
                    <div class="col-sm-6 col-md-2 col-6 text-left">
                        <div class="footer-course">
                            <div class="list-group">
                                <ul>
                                    <li class="list-group-item list-group-item-action">Graphic Design</li>
                                    <li class="list-group-item list-group-item-action">Business</li>
                                    <li class="list-group-item list-group-item-action">Marketing</li>
                                    <li class="list-group-item list-group-item-action">Engineering</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-2 col-6 text-left">
                        <div class="footer-Terms">
                            <div class="list-group">
                                <ul>
                                    <li class="list-group-item list-group-item-action">Graphic Design</li>
                                    <li class="list-group-item list-group-item-action">Business</li>
                                    <li class="list-group-item list-group-item-action">Marketing</li>
                                    <li class="list-group-item list-group-item-action">Engineering</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-2 col-6 text-left">
                        <div class="footer-useful-link">
                            <div class="list-group">
                                <ul>
                                    <li class="list-group-item list-group-item-action">Graphic Design</li>
                                    <li class="list-group-item list-group-item-action">Business</li>
                                    <li class="list-group-item list-group-item-action">Marketing</li>
                                    <li class="list-group-item list-group-item-action">Engineering</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 pb-5">
                    <p class="text-center">Copyright Reserved © 2020 | Designed by Asima</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;