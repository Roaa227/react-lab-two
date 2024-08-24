import React from 'react';
import ProductCard from './Card';
const ProductList = ({ products }) => {
  return (
    <>
      <h1 className='display-3 my-5 mx-2 text-center'>Welcome to Our Shop</h1>
    <div className='row'>
      {products.map(product => (
        <div className='col-lg-4 col-md-6 col-sm-12' >
            <ProductCard product={product} key={product.id} />
        </div>
      ))}
    </div>
    </>
  );
};

export default ProductList;
