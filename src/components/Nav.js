import React from "react";
import { Link } from "react-router-dom";
const Navb = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
<div className="container-fluid">
    <a className="navbar-brand fw-bold" style={{ color: 'hotpink' }} href="#">Shop Now</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to={`/`} >Home</Link>
            <Link className="nav-link" to={`/Help`}>Help</Link>
        </div>
    </div>
</div>
</nav>
    )
}

export default Navb;