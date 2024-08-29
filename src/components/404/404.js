import React from "react";
import { Link } from "react-router-dom";
import './404Style.css';
import { gsap, Quad } from 'gsap';


const NotFond = () => {

    return (
        <>
            <h1>404 Error Page #2</h1>
            <section class="error-container">
                <span class="four"><span class="screen-reader-text">4</span></span>
                <span class="zero"><span class="screen-reader-text">0</span></span>
                <span class="four"><span class="screen-reader-text">4</span></span>
            </section>
            <div class="link-container">
                        <Link to={'/'} className="btn btn-light">Go To Home</Link>

                            </div>
        </>
    )
}

export default NotFond;