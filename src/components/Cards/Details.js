import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const product = useLoaderData();
  console.log(product);
  const navigate = useNavigate();

  const handleClick = () => {
    fetch('http://localhost:8000/product/' + product.id, {
      method: 'DELETE'
    }).then(() => {
      navigate('/');  
    });
  };

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-6'>
          <img src={product.img} alt={product.name} className='img-fluid rounded shadow-sm' />
        </div>
        <div className='col-md-6'>
          <h1 className='display-4 mb-3'>{product.name}</h1>
          <p className='h4 text-success mb-3'>{product.price}</p>
          <p className='lead'>{product.description}</p>
          <button className='btn btn-white my-3' onClick={() => navigate('/')}>Go Back to Home</button>
          <button className='btn btn-danger my-3' onClick={handleClick}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;


export const DetailsLoader = async ({ params }) => {
  const { id } = params

  const res = await fetch(`http://localhost:8000/product/${id}`);

  if (!res.ok) {
    throw Error('Could not fetch the product details');
  }

  return res.json();
};
