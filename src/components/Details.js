import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <p className='text-center text-danger'>Product not found</p>;

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-6'>
          <img src={product.photo} alt={product.name} className='img-fluid rounded shadow-sm' />
        </div>
        <div className='col-md-6'>
          <h1 className='display-4 mb-3'>{product.name}</h1>
          <p className='h4 text-success mb-3'>{product.price}</p>
          <p className='lead'>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
