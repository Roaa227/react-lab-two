import React from "react";
import useFetch from "./useFetch";

export const Home = () => {
    const { data: products, isLoading, error } = useFetch("http://localhost:8000/products");

    // Group products by category
    const mobiles = products.filter(product => product.product_category === "mobile");
    const laptops = products.filter(product => product.product_category === "laptop");

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold" style={{ color: 'hotpink' }} href="#">Shop Now</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            <a className="nav-link" href="#">Pricing</a>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="container my-5">
                {isLoading ? (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : error ? (
                    <div className="text-danger">ERROR: {error}</div>
                ) : (
                    <div className="container">
                        {mobiles.length > 0 && (
                            <div>
                                <h2 className="display-5">Mobiles</h2>
                                {mobiles.map((product) => (
                                    <p key={product.product_id} className="shadow p-5"> < p style={{ color: 'hotpink' }} className="d-inline fw-bold">{product.product_name}</p> : {product.product_desc}</p>
                                ))}
                            </div>
                        )}

                        {laptops.length > 0 && (
                            <div>
                                <h2 className="display-5 mt-5">Laptops</h2>
                                {laptops.map((product) => (
                                    <p key={product.product_id} className="shadow p-5">< p style={{ color: 'hotpink' }} className="d-inline fw-bold">{product.product_name}</p>   : {product.product_desc}</p>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default Home;
