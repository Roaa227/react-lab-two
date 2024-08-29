import React from 'react';
// import ProductCard from './Cards/Card';
import { useParams, useLoaderData, Link } from 'react-router-dom';
// import { cardLoader } from './Cards/Card';

const ProductList = () => {
  const products = useLoaderData()

  return (
    <>
      <h1 className='display-3 my-5 mx-2 text-center'>Welcome to Our Shop</h1>
      <div className='container'>
        <div className='row'>
          {products.map(product => (
            <div className='col-lg-4 col-md-3 col-sm-6'>
              <div className="card" key={product.id} style={{ width: '18rem', margin: '10px' }}>
                <img src={product.img} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <Link to={`/product/${product.id}`} className="btn btn-light">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            ))}
            </div>
      </div>
    </>
  );
};

export default ProductList;

export const ListLoader = async () => {
  const res = await fetch('http://localhost:8000/product')

  if (!res.ok) {
    throw Error('Could not fetch the list of products')
  }

  return res.json()
}
