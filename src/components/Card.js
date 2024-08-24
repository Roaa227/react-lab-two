import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {

    return (
        <div className='container d-flex justify-content-center'>
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={product.photo} className="card-img-top" alt={product.name} />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.description}</p>
                            <Link to={`/product/${product.id}`} className="btn btn-light">
                                View Details
                            </Link>
                        </div>
                    </div>
                </div>
    );
};

export default ProductCard;
