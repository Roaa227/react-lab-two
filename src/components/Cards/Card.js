import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const ProductCard = () => {
    const products = useLoaderData();
    return (
        <div className='container d-flex justify-content-center'>
            {products.map(product => (
                <div className="card" key={product.id} style={{ width: '18rem', margin: '10px' }}>
                    <img src={product.photo} className="card-img-top" alt={product.name} />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                        <Link to={`/product/${product.id}`} className="btn btn-light">
                            View Details
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductCard;

export const cardLoader = async () =>
    {
        const res = await fetch('http://localhost:8000/product');
        return res.json();
    }