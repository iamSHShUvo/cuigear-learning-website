import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <section class="page_404">
                <div class="container">
                    <div class="row">
                    <div class="col-sm-12 ">
                        <div class="col-sm-10 col-sm-offset-1  text-center">
                        <div class="four_zero_four_bg">
                            <h1 class="text-center ">404</h1>

                        </div>

                        <div class="contant_box_404">
                            <h3 class="h2">
                            Hey! You are in the wrong page dude!
                            </h3>

                            <p>This page is not available right now</p>
                            <Link className="btn btn-md theme-bg-light theme-cl " to="/home">Go to Home</Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NotFound;